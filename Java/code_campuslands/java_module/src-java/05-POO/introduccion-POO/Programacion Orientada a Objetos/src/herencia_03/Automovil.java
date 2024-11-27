package herencia_03;

public class Automovil extends Vehiculo{
    private int numAsientos = 5;
    private final int numPuertas;

    public Automovil(String marcaModelo, double precioDia, int numllantas,
                     int numAsientos, int puertas) {
        super (marcaModelo, precioDia, numllantas);
        this.numAsientos = numAsientos;
        this.numPuertas = puertas;
        System.out.println("Ha creado un automovil");
    }

    public void mostrarDatos() {
        super.mostrarCaracteristicas();
        System.out.println("Asientos: " + numAsientos);
        System.out.println("Puertas: " + numPuertas);
    }

    @Override
    public void pruebaDelMotor() {
        super.encenderMotor();
        super.apagarMotor();
        super.funciona();
    }
}
