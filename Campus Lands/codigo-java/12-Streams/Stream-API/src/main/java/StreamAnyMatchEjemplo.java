import java.util.List;


public class StreamAnyMatchEjemplo  {
    public static void main(String[] args) {
        List<Integer> numeros = List.of(5, 8, 12, 4);

        boolean existeMayorQue10 = numeros.stream()
                .anyMatch(num -> num > 10); // Verificar condición

        System.out.println("¿Hay algún número mayor a 10? " + existeMayorQue10);
    }
}
