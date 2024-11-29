package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_real;

public class ClienteAnimal {
    public static void main(String[] args) {
        Creator perro = new PerroCreator();
        Creator gato = new GatoCreator();
        Creator pato = new PatoCreator();

        perro.hacerSonido();
        gato.hacerSonido();
        pato.hacerSonido();
    }
}
