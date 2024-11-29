package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_real;

public abstract class Creator {
    public abstract Animal crearAnimal();

    public void hacerSonido() {
        Animal animal = this.crearAnimal();
        animal.hacerSonido();
    }
}
