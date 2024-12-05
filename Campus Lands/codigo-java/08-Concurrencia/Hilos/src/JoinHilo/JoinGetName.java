package JoinHilo;

import java.util.Random;

public class JoinGetName implements Runnable {

    private Random rand = new Random(System.currentTimeMillis());

    public void run() {
        //simulate some CPU expensive task
        for (int i = 0; i < 100000000; i++) {
            rand.nextInt();
        }
        System.out.println("\t[HILO: " + Thread.currentThread().getName() + "] finished.");
    }

    public static void main(String[] args) throws InterruptedException {
        System.out.println("[MAIN]: " + Thread.currentThread().getName());

        Thread[] threads = new Thread[5];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(new JoinGetName(), "joinThread-" + i);
            threads[i].start();
        }
        for (int i = 0; i < threads.length; i++) {
            threads[i].join();
        }

        System.out.println("[MAIN]: " + Thread.currentThread().getName());
    }
}