import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class EjemploSteam02 {
    public static void main(String[] args) {
        List<Factura> lista = new ArrayList<Factura>();

        lista.add(new Factura("movil", 300));
        lista.add(new Factura("impresora", 200));
        lista.add(new Factura("ordenador", 1200));
        lista.add(new Factura("impresora", 400));
        lista.add(new Factura("imac", 1500));

        Predicate<Factura> predicado = new Predicate<Factura>() {
            @Override
            public boolean test(Factura f) {
                System.out.println(" iteracion " + f.getImporte());
                return f.getImporte() > 300;
            }
        };

        /*Factura facturaFiltro =
                lista.stream()
                        .filter(predicado).findFirst().get();

         */

        Factura facturaFiltro =
                lista.stream().peek(elem-> System.out.println(elem.getImporte()))
                        .filter(factura -> factura.getImporte() > 300)
                                .findFirst().get(); 

        System.out.println("UNICA :" + facturaFiltro.getImporte());

    }

}
