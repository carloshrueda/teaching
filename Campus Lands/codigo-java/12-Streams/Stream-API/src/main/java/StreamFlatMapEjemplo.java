import java.util.List;

public class StreamFlatMapEjemplo {
    public static void main(String[] args) {
        List<List<String>> listas = List.of(
                List.of("Java", "Python"),
                List.of("C++", "JavaScript"),
                List.of("Rust", "Go")
        );

        listas.stream()
                .flatMap(List::stream) // Descomponer sublistas
                .forEach(System.out::println); // Imprimir resultados
    }
}
