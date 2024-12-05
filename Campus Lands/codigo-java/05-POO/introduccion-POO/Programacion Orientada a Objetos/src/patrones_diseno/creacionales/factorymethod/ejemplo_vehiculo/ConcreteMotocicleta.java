package patrones_diseno.creacionales.factorymethod.ejemplo_vehiculo;

public class ConcreteMotocicleta extends VehiculoFactory {

    @Override
    public Vehiculo crearVehiculo() {
        return new Motocicleta();
    }
}
