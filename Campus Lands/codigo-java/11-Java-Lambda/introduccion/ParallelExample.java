import java.util.stream.IntStream;

public class ParallelExample {
    public static void main(String[] args) {
        IntStream.range(1, 10).parallel().forEach(i -> {
            System.out.println("Tarea ejecutada por: " +
                    Thread.currentThread().getName() + " para i=" + i);
        });
    }
}
