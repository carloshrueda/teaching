package Concurrencia.Hilos.src.introduccionhilos;

//import java.lang.Thread.State;

public class DatosHilos_01 extends Thread {
    public static void main(String[] args) {
        long id = Thread.currentThread().getId();
        String name = Thread.currentThread().getName();
        int priority = Thread.currentThread().getPriority();
        State state = Thread.currentThread().getState();
        String threadGroupName = Thread.currentThread().getThreadGroup().getName();

        System.out.println("\nid=" + id + "\nnombre=" + name + 
            "\nprioridad=" + priority + "\nestado= " + state + 
            "\nnombre del grupo de hilos= " + threadGroupName);
    }
}   