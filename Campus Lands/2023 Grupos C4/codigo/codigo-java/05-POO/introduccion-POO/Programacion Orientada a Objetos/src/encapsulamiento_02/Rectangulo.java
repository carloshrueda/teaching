package encapsulamiento_02;

public class Rectangulo {
    private double longitud = 1.0;
    private double anchura = 1.0;

    public Rectangulo() {
        this.longitud = 1.0;
        this.anchura = 1.0;
    }

    public Rectangulo(double longitud, double anchura) {
        setLongitud(longitud);
        setAnchura(anchura);
    }

    public double getLongitud() {
        return longitud;
    }

    public boolean setLongitud(double longitud) {
        if ((longitud > 0.0) && (longitud < 20.0)) {
            this.longitud = longitud;
            return true;
        } else {
            this.longitud = 0.0;
            return false;
        }
    }

    public double getAnchura() {
        return anchura;
    }

    public boolean setAnchura(double anchura) {
        if ((anchura > 0.0) && (anchura < 20.0)) {
            this.anchura = anchura;
            return true;
        } else {
            this.anchura = 0.0;
            return false;
        }
    }

    public double calcularArea() {
        return (longitud * anchura);
    }

    public double calcularPerimetro() {
        return (longitud + anchura);
    }
}

class PruebaRectangulo {
    public static void main(String[] args) {
        Rectangulo rect1 = new Rectangulo();
        System.out.println("El area del encapsulamiento_02.Rectangulo:  " + rect1.calcularArea());

        if (rect1.setLongitud(20.0)) {
            System.out.println("La nueva area es: " + rect1.calcularArea()) ;
        } else {
            System.out.println("Error. La longitud no es válida");
        }
    }
}
