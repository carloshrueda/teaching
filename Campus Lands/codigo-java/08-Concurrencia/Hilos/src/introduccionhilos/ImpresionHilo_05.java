package Concurrencia.Hilos.src.introduccionhilos;

import java.lang.Thread;

class Tarea3 implements Runnable {
    private int valor;

    public Tarea3(int valor) {
        this.valor = valor;
    }

    @Override
    public void run() {
        System.out.println("Soy el hilo y el valor de i es: " + valor);
    }
}

public class ImpresionHilo_05 {
    public static void main(String[] args) {
        System.out.println("Yo soy el hilo principal y sigo haciendo mi trabajo");
        for (int i = 0; i < 10; i++) {
            Thread hilo = new Thread(new Tarea3(i));
            hilo.start();
        }

        System.out.println("Fin del hilo principal");
    }
}
