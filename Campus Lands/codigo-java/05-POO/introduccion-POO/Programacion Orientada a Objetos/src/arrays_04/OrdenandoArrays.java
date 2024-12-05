package arrays_04;

import java.util.Arrays;
import java.util.Comparator;

public class OrdenandoArrays {
    public static void main(String[] args) {
        String[] names = {"Oscar", "America", "Ana"};
        Arrays.sort(names);
        for (String name : names)
            System.out.println(name);

        System.out.println("=".repeat(20));

        // Ordenar por longitud de caracteres
        Arrays.sort(names, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                //<0: menor || 0: igual || >0: mayor
                return o1.length() - o2.length();
            }
        });

        for (String name : names)
            System.out.println(name);
    }
}
