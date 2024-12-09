import java.util.ArrayList;
import java.util.List;

public class EjemploParallel {
    public static void main(String[] args) {
        List<Factura> lista = new ArrayList<Factura>();

        lista.add(new Factura("movil", 300));
        lista.add(new Factura("impresora", 200));
        lista.add(new Factura("ordenador", 1200));
        lista.add(new Factura("impresora", 400));
        lista.add(new Factura("imac", 1500));

                Factura facturaFiltro =
                        lista.stream().parallel()
                                .filter(factura -> factura.getImporte() > 300)
                                .findFirst().get();

        System.out.println("UNICA :" + facturaFiltro.getImporte());
    }

}
