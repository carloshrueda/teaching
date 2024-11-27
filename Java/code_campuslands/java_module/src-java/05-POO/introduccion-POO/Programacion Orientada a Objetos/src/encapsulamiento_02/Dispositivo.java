package encapsulamiento_02;

public class Dispositivo {
    private final String marca;
    private final double precio;
    String serie;

    public Dispositivo(String marca, double precio) {
        this.marca = marca;
        this.precio = precio;
        serie = "";
    }

    public Dispositivo(String marca, double precio, String serie) {
        this.marca = marca;
        this.precio = precio;
        this.serie = serie;
    }

    public String imprimir() {
        return "Dispositivo [marca=" + marca + ", precio=" + precio + "]";
    }
}

class pruebaDispositivo {
    public static void main(String[] args) {
        Dispositivo d = new Dispositivo("samsung", 200);

        /*System.out.println(d.getMarca());
        System.out.println(d.getPrecio());

        d.serie = "Galaxy";
        System.out.println(d.getSerie());*/
    }
}