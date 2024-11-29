package herencia_03;

public class Autobus extends Vehiculo{
    private int numAsientos = 5;
    private final int numPuertas;
    private final int numVentanillas;

    public Autobus(String marcaModelo, double precioDia, int numllantas,
                     int numAsientos, int puertas, int numVentanillas) {
        super (marcaModelo, precioDia, numllantas);
        this.numAsientos = numAsientos;
        this.numPuertas = puertas;
        this.numVentanillas = numVentanillas;
        System.out.println("Ha creado un autobus");
    }

    public void mostrarDatos() {
        super.mostrarCaracteristicas();
        System.out.println("Asientos: " + numAsientos);
        System.out.println("Puertas: " + numPuertas);
        System.out.println("Ventanillas: " + numVentanillas);
    }

    @Override
    public void pruebaDelMotor() {
        super.encenderMotor();
        super.apagarMotor();
        super.funciona();
    }
}
