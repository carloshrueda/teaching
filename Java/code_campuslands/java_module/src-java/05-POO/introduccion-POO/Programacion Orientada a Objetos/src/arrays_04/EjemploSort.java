package arrays_04;

import java.util.Arrays;
import java.util.Comparator;

public class EjemploSort {
    public static void main(String[] args) {
        String[] names = {"Oscar", "America", "Ana"};

        Arrays.sort(names);

        for(String name : names) {
            System.out.println(name);
        }

        System.out.println("=".repeat(30));

        Arrays.sort(names, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                // <0: o1 < o2 || =0: o1 == o2 || >0: o1 > o2
                return o1.length() - o2.length();
            }
        });

        for(String name : names) {
            System.out.println(name);
        }
    }

}
