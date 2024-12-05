package Concurrencia.Hilos.src.introduccionhilos;

public class MiHilo_02 extends Thread {
    public MiHilo_02(String name) {
        super(name);
    }

    @Override
    public void run() {
        System.out.println("Executing thread " + Thread.currentThread().getName());
    }

    public static void main(String[] args) throws InterruptedException {
        MiHilo_02 myThread = new MiHilo_02("myThread");
        System.out.println("\n INICIO DE HILO");
        myThread.start();
        System.out.println("\n FIN DE HILO");
    }
}
