package SincronizadorHilos;

class ContadorSincronizado {
    private int valor = 0;

    // METODO SINCRONIZADO
    public synchronized void ping() {
        int old = this.valor;
        old += 1;
        this.valor = old;
    }


    public int getValor() {
        return valor;
    }
}

class ContableHiloSincronizado implements Runnable {
    private ContadorSincronizado cont;

    public ContableHiloSincronizado(ContadorSincronizado cont) {
        this.cont = cont;
    }


    @Override
    public void run() {
        // Ahora este metodo está SINCRONIZADO
        cont.ping();
    }
}

public class SincronizandoPing {
    final static int HILOS = 1000;

    public static void iterar() {
        ContadorSincronizado cs = new ContadorSincronizado();

        // Creando los Hilos
        Thread[] hilos = new Thread[HILOS];
        for(int i = 0; i<HILOS; i++) {
            hilos[i] = new Thread(new ContableHiloSincronizado(cs));
        }

        //Mandando a ejecutar los Hilo
        for(int i = 0; i<HILOS; i++) {
            hilos[i].start();
        }

        //Parando la ejecución Hilo MAIN
        for(int i = 0; i<HILOS; i++) {
            try {
                hilos[i].join();
            } catch (InterruptedException e) {
                System.out.println("Error. Esperando ejecución hilos.\n" + e.getMessage());;
            }
        }

        //Obteniendo el valor resultado despues de todos los hilos
        int total = cs.getValor();
        if (total != HILOS)
            System.out.println("Resultado final: " + total);
    }

    public static void main(String[] args) {
        for (;;)
            iterar();

    }
}
