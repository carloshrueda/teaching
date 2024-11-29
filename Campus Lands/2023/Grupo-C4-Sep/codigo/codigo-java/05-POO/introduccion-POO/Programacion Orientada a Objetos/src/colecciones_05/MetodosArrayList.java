package colecciones_05;

import java.util.ArrayList;

public class MetodosArrayList {
    public static void main(String[] args) {
        ArrayList<String> strArrayList = new ArrayList<String>();

        // Añade el elemento al ArrayList
        strArrayList.add("Elemento 1");
        strArrayList.add("Elemento 2");

        // Añade el elemento al ArrayList en la posición '1'
        strArrayList.add(1, "Elemento 3");

        for(String elem : strArrayList) {
            System.out.println(elem);
        }

        System.out.println("Tamaño ArrayList: " + strArrayList.size());

        // Devuelve el elemento que esta en la posición '2' del ArrayList
        System.out.println("Elemento en posicion 2: " +strArrayList.get(2));

        // Comprueba se existe del elemento ('Elemento') que se le pasa como parametro
        System.out.println("Está 'Elemento 4' en el Array?: " +strArrayList.contains("Elemento 4"));

        // Devuelve la posición de la primera ocurrencia ('Elemento') en el ArrayList
        System.out.println("Posición de 'Elemento 4' en el Array?: " + strArrayList.indexOf("Elemento 4"));

        // Devuelve la posición de la última ocurrencia ('Elemento') en el ArrayList
        System.out.println("Posición de 'Elemento 2' en el Array?: " + strArrayList.lastIndexOf("Elemento 2"));

        // Borra el elemento de la posición '5' del ArrayList
        // Devuelve el elemento eliminado
        System.out.println(strArrayList.remove(0));

        // Borra la primera ocurrencia del 'Elemento' que se le pasa como parametro.
        // Devuelve verdadero si esta lista contiene el elemento especificado
        System.out.println(strArrayList.remove("Elemento 4"));


        //Borra todos los elementos de ArrayList
        //strArrayList.clear();

        // Devuelve true si esta lista no contiene elementos
        //strArrayList.isEmpty();

        // Copiar un ArrayList
        ArrayList strArrayListCopia = (ArrayList) strArrayList.clone();

        // Pasa el ArrayList a un Array
        Object[] vstr = strArrayList.toArray();
        for(Object elem : vstr) {
            System.out.println((String) elem);
        }


    }
}
