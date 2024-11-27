package patrones_diseno.creacionales.factorymethod.ejemplo_vehiculo;

public class Cuatrimoto implements Vehiculo{
    @Override
    public void conducir() {
        System.out.println("Conduciendo Cuatrimoto");
    }
}
