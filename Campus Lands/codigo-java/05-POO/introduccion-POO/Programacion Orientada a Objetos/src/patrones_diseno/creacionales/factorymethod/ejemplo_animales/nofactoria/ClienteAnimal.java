package patrones_diseno.creacionales.factorymethod.ejemplo_animales.nofactoria;

public class ClienteAnimal {
    public static void main(String[] args) {
        Perro perro = new Perro();
        Gato gato = new Gato();
        Pato pato = new Pato();

        perro.hacerSonido();
        gato.hacerSonido();
        pato.hacerSonido();
    }
}
