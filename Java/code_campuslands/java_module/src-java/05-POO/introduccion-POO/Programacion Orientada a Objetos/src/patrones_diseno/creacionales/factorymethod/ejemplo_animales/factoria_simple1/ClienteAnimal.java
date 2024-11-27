package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_simple1;

public class ClienteAnimal {
    public static void main(String[] args) {
        Animal perro = Animal.crearAnimal("Perro");
        Animal gato = Animal.crearAnimal("Gato");
        Animal pato = Animal.crearAnimal("Pato");

        perro.hacerSonido();
        gato.hacerSonido();
        pato.hacerSonido();
    }
}
