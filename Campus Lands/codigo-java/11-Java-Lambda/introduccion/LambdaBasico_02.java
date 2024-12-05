import java.util.ArrayList;
import java.util.List;

public class LambdaBasico_02 {
    public static void main(String[] args) {
        List<Integer> numeros = new ArrayList<>();

        numeros.add(12);
        numeros.add(15);
        numeros.add(1);
        numeros.add(2);
        numeros.add(5);
        numeros.add(11);

        // Imprimir los números impares usando LAMBDAS
        numeros.stream()
                .filter(num -> num%2 != 0)
                .forEach(n -> System.out.println(n));

    }


}
