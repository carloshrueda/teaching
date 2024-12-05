import java.util.function.Predicate;

public class Predicate_01 {
    public static void main(String[] args) {
        Predicate<Integer> isEven = number -> number % 2 == 0;
        System.out.println("¿Es 4 par? " + isEven.test(4));
        System.out.println("¿Es 7 par? " + isEven.test(7));
    }
}
