package patrones_diseno.creacionales.factorymethod.ejemplo_vehiculo;

public class ConcreteCoche extends VehiculoFactory {
    @Override
    public Vehiculo crearVehiculo() {
        return new Coche();
    }
}
