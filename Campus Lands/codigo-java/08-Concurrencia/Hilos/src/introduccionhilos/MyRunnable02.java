package Concurrencia.Hilos.src.introduccionhilos;

public class MyRunnable02 {
  public static void main(String args[]) {
    Tarea tarea = new Tarea();
    Thread hilo = new Thread(tarea);
    hilo.start();
    System.out.println("Yo soy el hilo principal y sigo haciendo mi trabajo");
    System.out.println("Fin del hilo principal");
  }
}

class Tarea implements Runnable {
  @Override
  public void run() {
    for (int i = 0; i < 10; i++) {
      System.out.println("Soy un hilo y esto es lo que hago");
    }
  }
}