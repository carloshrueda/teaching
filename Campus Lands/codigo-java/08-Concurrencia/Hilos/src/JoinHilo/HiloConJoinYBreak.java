package JoinHilo;

public class HiloConJoinYBreak {
    public static void main(String[] args) {
        Thread hilo = new Thread(() -> {
            try {
                System.out.println("\t**> [HILO] Hilo iniciado. Realizando una tarea que tomará 10 segundos...");
                for (int i = 1; i <= 10; i++) {
                    System.out.println("\t\t***> [HILO] Hilo trabajando: " + i + " segundos");
                    Thread.sleep(1500); // Simula trabajo de 1 segundo por iteración
                }
                System.out.println("\t**> [HILO] Hilo finalizó su tarea.");
            } catch (InterruptedException e) {
                System.out.println(">>> [HILO CATCH] Hilo interrumpido antes de finalizar.");
            }
        });

        hilo.start();

        long tiempoInicio = System.currentTimeMillis();
        boolean hiloTerminado = false;

        while (System.currentTimeMillis() - tiempoInicio < 8000) { // Máximo 8 segundos de espera
            try {
                hilo.join(2000); // Esperar 2 segundos al hilo
                if (!hilo.isAlive()) { // Verifica si el hilo ha terminado
                    hiloTerminado = true;
                    break; // Sale del bucle si el hilo ya terminó
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("[MAIN] El hilo aún no ha terminado. Intentando de nuevo...");
        }

        if (!hiloTerminado) {
            System.out.println("[MAIN - INTERRUPT] El hilo no terminó a tiempo. Finalizando el hilo.");
            hilo.interrupt(); // Interrumpe el hilo si no terminó
        }

        System.out.println("[MAIN] Programa principal finalizado.");
    }
}
