package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_real;

public class PerroCreator extends Creator {
    public Animal crearAnimal(){
        return new Perro();
    }
}
