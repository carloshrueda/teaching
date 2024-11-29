package patrones_diseno.creacionales.factorymethod.ejemplo_vehiculo;

public class Motocicleta implements Vehiculo {
    @Override
    public void conducir() {
        System.out.println("Conduciendo Motocicleta");
    }
}
