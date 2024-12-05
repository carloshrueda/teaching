package HolaMundoHilos;

import java.time.LocalDateTime;

public class PrincipalHilos {
    public static void main(String[] args) {
        System.out.println("INICIO MAIN " + LocalDateTime.now());

        EjemploThread hiloThread = new EjemploThread();
        hiloThread.start();

        EjemploRunnable ejemRunnable = new EjemploRunnable();
        Thread hiloRunnable = new Thread(ejemRunnable);
        hiloRunnable.start();

        try {
            hiloRunnable.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }


        System.out.println("FIN MAIN " + LocalDateTime.now());
    }
}
