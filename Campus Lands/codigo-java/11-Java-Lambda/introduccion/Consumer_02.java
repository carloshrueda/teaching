import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class Consumer_02 {
    public static void process(List<Integer> list, Consumer<Integer> c) {
        c.accept(list.get(0));
    }

    public static void main(String[] args) {
        List<Integer> numeros = new ArrayList<>();

        numeros.add(12); numeros.add(15); numeros.add(1);
        numeros.add(2); numeros.add(5); numeros.add(11);

        process(numeros, ( i)->System.out.println(i));
    }
}
