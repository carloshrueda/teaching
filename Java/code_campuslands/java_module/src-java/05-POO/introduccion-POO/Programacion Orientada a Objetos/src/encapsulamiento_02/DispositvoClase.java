package encapsulamiento_02;

public class DispositvoClase {
    private String marca;
    private String precio;
    String serie;

    public DispositvoClase(String marca, String precio) {
        this.marca = marca;
        this.precio = precio;
        this.serie = "";
    }

    public DispositvoClase(String marca, String precio, String serie) {
        this.marca = marca;
        this.precio = precio;
        this.serie = serie;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getSerie() {
        return serie;
    }

    public void setSerie(String serie) {
        this.serie = serie;
    }

    public String imprimir() {
        return "Dispositivo: [marca=" + marca + ", precio=" + precio + ", serie=" + serie + "]";
     }
}

class PruebaDispositivoClase {
    public static void main(String[] args) {
        DispositvoClase d = new DispositvoClase("Samsung", "1000");

        d.setSerie("Galaxy");
        System.out.println(d.imprimir());
    }
}
