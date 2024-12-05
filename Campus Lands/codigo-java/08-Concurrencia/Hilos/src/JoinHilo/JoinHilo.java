package JoinHilo;

import java.time.Duration;

public class JoinHilo {
    public static void main(String[] args) {
        System.out.println("INICIO PROGRAMA PRINCIPAL");
        Thread hilo = new Thread( () -> {
            try {
                System.out.print("\t[Inicio Hilo] ->");
                Thread.sleep(Duration.ofSeconds(5));
                System.out.println("\t[FIN Hilo]");
            } catch (InterruptedException e) {
                System.out.println(">>> [JoinHilo] Hilo interrumpido antes de finalizar.");
            }

        });

        hilo.start();

        // Pausa el hilo del main hasta que el tiempo de ejecución del
        // hilo termine
        boolean estadoHilo = false;
        try {
            // hilo.join(3000);
            estadoHilo = hilo.join(Duration.ofSeconds(3));

        } catch (InterruptedException e) {
            System.out.println(">>> [MAIN JOIN] Error Join. \n" + e.getMessage());
        }

        if (!estadoHilo && hilo.isAlive()) {
            // Si estadoHilo = false y hilo.estaVivo() = true
            hilo.interrupt();
            System.out.println("Hilo Interrumpido");
        }

        System.out.println("\nFIN PROGRAMA PRINCIPAL [Estado Hilo: " + estadoHilo + "]" + hilo.isAlive());
    }
}
