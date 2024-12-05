package HolaMundoHilos;

import java.time.LocalDateTime;
import java.util.concurrent.ThreadLocalRandom;

public class EjemploRunnable implements Runnable {
    @Override
    public void run() {
        try {
            int randNum = ThreadLocalRandom.current().nextInt(2, 10);
            System.out.println("\t<INICIO RUNNABLE>  " + LocalDateTime.now() + " (" + randNum + " seg )");
            Thread.sleep(randNum * 1000L);
            System.out.println("\t<FIN RUNNABLE>  " + LocalDateTime.now());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
