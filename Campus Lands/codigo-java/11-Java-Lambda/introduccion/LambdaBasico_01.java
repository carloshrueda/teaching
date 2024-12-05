import java.util.ArrayList;
import java.util.List;

public class LambdaBasico_01 {
    public static void main(String[] args) {
        List paises = new ArrayList<>();

        paises.add("Ecuador");
        paises.add("Bolivia");
        paises.add("Perú");
        paises.add("Colombia");
        paises.add("Argentina");
        paises.add("Venezuela");

        // Imprimir el listado de paises usando Lambdas
        paises.forEach(pais -> System.out.println("Pais: " + pais));
    }
}
