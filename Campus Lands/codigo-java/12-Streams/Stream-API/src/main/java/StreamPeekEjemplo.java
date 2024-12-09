import java.util.List;

public class StreamPeekEjemplo {
    public static void main(String[] args) {
        List<String> nombres = List.of("Ana", "Luis", "Carlos");

        nombres.stream()
                .peek(elem -> System.out.println("Antes: " + elem))
                .map(String::toUpperCase) // Convertir a mayúsculas
                .forEach(System.out::println); // Imprimir resultados
    }
}
