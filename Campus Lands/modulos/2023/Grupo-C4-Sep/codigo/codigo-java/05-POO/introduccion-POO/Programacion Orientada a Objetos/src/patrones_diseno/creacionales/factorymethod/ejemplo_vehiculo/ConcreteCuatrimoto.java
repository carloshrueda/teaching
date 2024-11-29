package patrones_diseno.creacionales.factorymethod.ejemplo_vehiculo;

public class ConcreteCuatrimoto extends VehiculoFactory {
    @Override
    public Vehiculo crearVehiculo() {
        return new Cuatrimoto();
    }
}
