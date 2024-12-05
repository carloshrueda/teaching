package herencia_03;

abstract public class Vehiculo {
    protected double precioDia;
    protected String marcaModelo;
    protected int numllantas;

    public Vehiculo(String marcaModelo, double precioDia, int numllantas) {
        this.precioDia = precioDia;
        this.marcaModelo = marcaModelo;
        this.numllantas = numllantas;
        System.out.println("Construyó el vehículo");
    }

    public void mostrarCaracteristicas() {
        System.out.println("Marca: " + marcaModelo);
        System.out.println("Precio: " + precioDia);
        System.out.println("Numero de llantas: " + numllantas);
    }

    public void encenderMotor() {
        System.out.println("el motor se encendió");
    }

    public void apagarMotor() {
        System.out.println("el motor se apagó");
    }

    public void funciona() {
        System.out.println("el motor de " + marcaModelo +
                " funciona correctamente");
    }

    abstract public void pruebaDelMotor();
}
