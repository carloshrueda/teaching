package clases_genericas_09;

public class Intercambiador {
    public static <T> T[] intercambiar(T first, T second) {
        if (mismoTipo(first, second)) {
            T[] temp = (T[]) new Object[2];
            temp[0] = second;
            temp[1] = first;

            second = temp[0];
            first = temp[1];

            return temp;

        } else {
            throw new IllegalArgumentException("No son del mismo tipo");
        }

    }

    public static <T, U> boolean mismoTipo(T obj1, U obj2) {
        return obj1.getClass().equals(obj2.getClass());
    }
}

class MiClase {
    private final int num;
    public MiClase(int num) {
        this.num = num;
    }

    @Override
    public String toString() {
        return num + "";
    }
}

class PruebaIntercambiador {
    public static void main(String[] args) {
        try {
            MiClase o1 = new MiClase(1);
            MiClase o2 = new MiClase(2);
            //Integer o2 = 2;
            System.out.println("Antes del intercambio: " + o1 + " - " + o2);

            Object[] intercambiados = Intercambiador.intercambiar(o1, o2);
            o1 = (MiClase) intercambiados[0];
            o2 = (MiClase) intercambiados[1];


            System.out.println("Después del intercambio: " + o1 + " - " + o2);
        } catch (IllegalArgumentException e) {
            System.out.println("Error en el intercambio \n" + e.getMessage());
        }
    }
}