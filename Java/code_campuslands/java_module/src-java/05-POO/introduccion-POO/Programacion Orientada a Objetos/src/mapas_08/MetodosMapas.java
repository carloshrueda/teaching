package mapas_08;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MetodosMapas {
    public static void main(String[] args) {
        Map<Integer, String> mapa = new HashMap<Integer, String>();

        // Agregando Elementos
        mapa.put(57, "Colombia");
        mapa.put(65, "Inglaterra");
        mapa.put(1, "Japan");

        // Tamaño del mapa
        System.out.println("Elementos: " + mapa.size());

        // Limpiar el mapa
        mapa.clear();

        // Agregando Elementos
        mapa.put(57, "Colombia");
        mapa.put(65, "Inglaterra");
        mapa.put(1, "Japan");

        // llamado la metodo to String
        System.out.println("Elementos: " + mapa.size());
        System.out.println(mapa);

        if (mapa.containsKey(80)) {
            System.out.println("La llave 80 existe.");
        } else {
            System.out.println("La llave 80 NO existe");
        }

        // averiguando si la el value de la key existe
        if (mapa.containsValue("Colombia")) {
            System.out.println("El valor Existe.");
        } else {
            System.out.println("El valor NO existe");
        }

        mapa.put(1, "Afganistán");
        System.out.println("Mapa: " + mapa);

        // Cada elemento del conjunto es Map.Entry<Integer, String>
        Set<Map.Entry<Integer, String>> conj = mapa.entrySet();
        System.out.println("Conjunto: " + conj);

        /*
         * Salida:
         * Mapa: {65=Inglaterra, 1=Afganistán, 57=Colombia}
         * Conjunto: [65=Inglaterra, 1=Afganistán, 57=Colombia]
         */

        Map<Integer, String> mapa2 = new HashMap<Integer, String>();

        // Agregando Elementos
        mapa2.put(57, "Colombia");
        mapa2.put(65, "Inglaterra");
        mapa2.put(1, "Japan");
        System.out.println("Son iguales? " + mapa.equals(mapa2)); // Son iguales? false

        mapa2.put(1, "Afganistán");
        System.out.println("Son iguales? " + mapa.equals(mapa2)); // Son iguales? true

        System.out.println("Valor llave 1: " + mapa.get(1)); // Valor llave 1: Afganistán
        System.out.println("Valor llave 101: " + mapa.get(101)); // Valor llave 101: null

        System.out.println("Código Hash llave 3: " + mapa.hashCode());
        // Código Hash llave 3: -1208307866

        System.out.println("Map: " + mapa);
        // Map: {65=Inglaterra, 1=Afganistán, 57=Colombia}

        mapa2.putIfAbsent(101, "Brazil");
        System.out.println("Map2 : " + mapa2);
        // Map2 : {65=Inglaterra, 1=Afganistán, 101=Brazil, 57=Colombia}

        mapa2.merge(101, "BOSTWANIA", (anterior, nuevo) -> anterior + "-" + nuevo);

        System.out.println("Map 2 (despues merge): " + mapa2);
        // Map 2 (despues merge): {65=Inglaterra, 1=Afganistán, 101=Brazil-BOSTWANIA,
        // 57=Colombia}

    }
}
