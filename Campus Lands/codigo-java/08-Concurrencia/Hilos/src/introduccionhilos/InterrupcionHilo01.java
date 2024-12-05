package Concurrencia.Hilos.src.introduccionhilos;

public class InterrupcionHilo01 {
    public static void main(String[] args) {
        // Crear e iniciar un hilo
        Thread myThread = new Thread(new MyRunnable01(), "myRunnable");
        myThread.start();

        // Mensaje principal
        System.out.println("El hilo principal continúa su ejecución.");
    }
}


class MyRunnable implements Runnable {

    @Override
    public void run() {
        int counter = 0; // Contador para limitar la ejecución
        while (counter < 5) { // Se detendrá después de 5 iteraciones
            doSomethingUseful(counter);
            try {
                 // Pausa de 1 segundo
                 Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.err.println("Hilo interrumpido: " + 
                Thread.currentThread().getName());
                break; // Salir si el hilo es interrumpido
            }
            counter++;
        }
        System.out.println("El hilo ha terminado su ejecución.");
    }

    // Método útil: imprime un mensaje
    private void doSomethingUseful(int iteration) {
        System.out.println("Ejecutando tarea útil en iteración: " + 
                                iteration);
    }
}
