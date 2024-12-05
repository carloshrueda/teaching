import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class Predicate_02 {
    public static void main(String[] args) {
        // Lista de números
        List<Integer> numeros = new ArrayList<>();
        numeros.add(1);
        numeros.add(2);
        numeros.add(3);
        numeros.add(4);
        numeros.add(5);

        // Predicate para filtrar números pares
        Predicate<Integer> esPar = num -> num % 2 == 0;

        // Filtrar números pares
        List<Integer> numerosPares = filtrarNumeros(numeros, esPar);

        // Imprimir números pares
        System.out.println("Números Pares: " + numerosPares);
    }

    // Método para filtrar números con un Predicate
    private static List<Integer> filtrarNumeros(List<Integer> numeros, Predicate<Integer> predicado) {
        List<Integer> resultado = new ArrayList<>();
        for (Integer num : numeros) {
            if (predicado.test(num)) {
                resultado.add(num);
            }
        }
        return resultado;
    }
}
