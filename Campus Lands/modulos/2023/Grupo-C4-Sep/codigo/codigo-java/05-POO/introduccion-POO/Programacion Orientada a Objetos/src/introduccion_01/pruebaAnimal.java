package introduccion_01;

public class pruebaAnimal {
    public static void main(String[] args) {
        Animal miAnimal = new Animal("gato", 3);

        /*miAnimal.setEdad(3);*/
        System.out.print("El tipo es: " + miAnimal.getTipo());
        System.out.println(" y tiene " + miAnimal.getEdad());
    }
}
