package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_simple2;

public class FactoriaAnimales {
    public static Animal crearAnimal(String tipo) {
        if (tipo.equalsIgnoreCase("Gato")) {
            return new Gato();
        } else if (tipo.equalsIgnoreCase("Pato")) {
            return new Pato();
        } else if (tipo.equalsIgnoreCase("Perro")) {
            return new Perro();
        }

        return null;
    }
}
