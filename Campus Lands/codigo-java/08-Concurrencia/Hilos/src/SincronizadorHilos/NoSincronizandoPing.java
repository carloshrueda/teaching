package SincronizadorHilos;

class Contador {
    private int valor = 0;

    public void ping() {
        int old = this.valor;
        old += 1;
        this.valor = old;
    }


    public int getValor() {
        return valor;
    }
}

class ContableHilo implements Runnable {
    private Contador cont;

    public ContableHilo(Contador cont) {
        this.cont = cont;
    }


    @Override
    public void run() {
        cont.ping();
    }
}

public class NoSincronizandoPing {
    final static int HILOS = 1000;

    public static void iterar() {
        Contador c = new Contador();

        // Creando los Hilos
        Thread[] hilos = new Thread[HILOS];
        for(int i = 0; i<HILOS; i++) {
            hilos[i] = new Thread(new ContableHilo(c));
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
        int total = c.getValor();
        if (total != HILOS)
            System.out.println("Resultado final: " + total);
    }

    public static void main(String[] args) {
        for (;;)
            iterar();

    }
}
