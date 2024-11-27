package patrones_diseno.creacionales.factorymethod.ejemplo_vehiculo;

public class ClienteVehiculo {
    public static void main(String[] args) {
        VehiculoFactory motoFact = new ConcreteMotocicleta();
        VehiculoFactory taxiFact = new ConcreteCoche();
        VehiculoFactory cuatriFact = new ConcreteCuatrimoto();

        Vehiculo moto = motoFact.crearVehiculo();
        Vehiculo taxi = taxiFact.crearVehiculo();
        Vehiculo cuatri = cuatriFact.crearVehiculo();

        moto.conducir();
        taxi.conducir();
        cuatri.conducir();
    }
}
