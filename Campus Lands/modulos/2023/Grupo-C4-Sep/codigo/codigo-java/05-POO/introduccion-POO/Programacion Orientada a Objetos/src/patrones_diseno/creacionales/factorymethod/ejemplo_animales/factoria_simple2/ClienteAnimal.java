package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_simple2;

public class ClienteAnimal {
    public static void main(String[] args) {
        Animal perro = FactoriaAnimales.crearAnimal("Perro");
        Animal gato = FactoriaAnimales.crearAnimal("Gato");
        Animal pato = FactoriaAnimales.crearAnimal("Pato");

        perro.hacerSonido();
        gato.hacerSonido();
        pato.hacerSonido();
    }
}
