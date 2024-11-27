package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_real;

public class GatoCreator extends Creator{
    public Animal crearAnimal(){
        return new Gato();
    }

}
