import java.util.function.Function;


public class FuncionesLambda_01 {
    public static void main(String[] args) {
        Function<String, Integer> lenStr = (String s) -> {
            return s.length();
        };

        Function<String, Integer> lenStr2 =  s -> s.length();

        String cad = "Campus Lands";

        System.out.println("Longitud cadena: " + lenStr.apply(cad));

        System.out.println("Longitud cadena: " + lenStr2.apply(cad));
    }


}
