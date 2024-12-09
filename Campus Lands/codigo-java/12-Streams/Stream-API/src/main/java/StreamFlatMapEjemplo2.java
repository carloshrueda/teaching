import java.util.stream.Stream;
import java.util.List;
import java.util.stream.Collectors;

class Animal {
    private String tipo;

    public Animal(String nombre) {
        this.tipo = nombre;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "tipo='" + tipo + '\'' +
                '}';
    }
}

public class StreamFlatMapEjemplo2 {
    public static void main(String[] args) {
        Stream<Animal> animales = Stream.of("Pato", "Gato", "Perro grande", "Perro pequeño")
                .map(animal -> new Animal(animal))
                .flatMap(animal -> {
                    if (animal.getTipo().equalsIgnoreCase("Gato")) {
                        return Stream.of(animal);
                    }
                    return Stream.empty();
                })
                .peek(System.out::println);

        List<Animal> listaAnimales = animales.collect(Collectors.toList());
        System.out.println(listaAnimales);
    }
}
