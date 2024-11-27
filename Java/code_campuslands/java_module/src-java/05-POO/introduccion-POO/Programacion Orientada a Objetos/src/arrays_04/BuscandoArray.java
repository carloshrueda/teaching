package arrays_04;

import java.util.Arrays;

public class BuscandoArray {
    public static void main(String[] args) {
        String[] names = {"Oscar", "America", "Ana"};

        int pos = Arrays.binarySearch(names, "Ana");
        if (pos >= 0)
            System.out.println("Se encontró. Posición: " + pos);
        else
            System.out.println("No se encontró en el array.");

    }
}
