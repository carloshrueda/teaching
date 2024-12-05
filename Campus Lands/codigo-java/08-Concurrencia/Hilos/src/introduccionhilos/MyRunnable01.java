package Concurrencia.Hilos.src.introduccionhilos;

public class MyRunnable01 implements Runnable {

    public void run() {
        System.out.println("Ejecutando el Hilo " + 
            Thread.currentThread().getName());
    }

    public static void main(String[] args) throws InterruptedException {
        Thread myThread = new Thread(new MyRunnable01(), "myRunnable");
        myThread.start();
    }
}