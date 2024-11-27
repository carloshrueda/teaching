package herencia_03;

public class Motocicleta extends Vehiculo{
    private int numAsientos = 1;

    public Motocicleta(String marcaModelo, double precioDia, int numllantas,
                     int numAsientos) {
        super (marcaModelo, precioDia, numllantas);
        this.numAsientos = numAsientos;
        System.out.println("Ha creado una motocicleta");
    }

    public void mostrarDatos() {
        super.mostrarCaracteristicas();
        System.out.println("Asientos: " + numAsientos);
    }

    @Override
    public void pruebaDelMotor() {
        super.encenderMotor();
        super.apagarMotor();
        super.funciona();
    }
}
