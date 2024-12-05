package HolaMundoHilos;

import java.time.LocalDateTime;
import java.util.concurrent.ThreadLocalRandom;

public class EjemploThread extends Thread {

    @Override
    public void run() {
        try {
            int randNum = ThreadLocalRandom.current().nextInt(2, 10);
            System.out.println("\t[INICIO THREAD] "  + LocalDateTime.now() + " (" + randNum + " seg )");
            Thread.sleep(randNum * 1000L);
            System.out.println("\t[FIN THREAD] "  + LocalDateTime.now());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
}
