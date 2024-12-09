import java.util.List;

public class StreamMapEjemplo {
    public static void main(String[] args) {
        List<String> nombres = List.of("Ana", "Luis", "Carlos");

        nombres.stream()
                .map(String::toUpperCase) // Convertir a mayúsculas
                .forEach(System.out::println); // Imprimir resultados
    }
}
