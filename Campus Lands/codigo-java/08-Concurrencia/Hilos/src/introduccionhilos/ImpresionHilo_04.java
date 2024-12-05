package Concurrencia.Hilos.src.introduccionhilos;

import java.lang.Thread;

class Tarea2 extends Thread {
    private int numHilo;

    public Tarea2(int i) {
        numHilo = i;
      System.out.println("Creando hilo [" + numHilo + "]");
    }

    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Soy el hilo  [" + 
                        numHilo + " - " + i + 
                        "] y esto es lo que hago");
        }
    }
}

public class ImpresionHilo_04 {
    public static void main(String[] args) {
        System.out.println("Yo soy el hilo principal y sigo haciendo mi trabajo");
        for (int i = 0; i < 5; i++) {
            Thread hilo = new Thread(new Tarea2(i));
            hilo.start();
        }

        System.out.println("Fin del hilo principal");
    }
}
