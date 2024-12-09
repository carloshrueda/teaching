import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

class Factura {
    private String producto;
    private int importe;

    public Factura(String producto, int valor) {
        this.producto = producto;
        this.importe = valor;
    }

    public String getProducto() {
        return producto;
    }
    public void setProducto(String producto) {
        this.producto = producto;
    }
    public int getImporte() {
        return importe;
    }
    public void setImporte(int importe) {
        this.importe = importe;
    }
}

public class EjemploSteam01 {

    public static void versionAnterior() {
        List<Factura> lista = new ArrayList<Factura>();

        lista.add(new Factura("movil", 300));
        lista.add(new Factura("impresora", 200));
        lista.add(new Factura("ordenador", 1200));
        lista.add(new Factura("impresora", 400));
        lista.add(new Factura("imac", 1500));

        Factura factValorSuperior = null;
        for (Factura fact : lista){
            if (fact.getImporte() > 300) {
                factValorSuperior = fact;
                break;
            }
        }

        System.out.println("UNICA :" + factValorSuperior.getImporte());
    }

    public static void main(String[] args) {
        List<Factura> lista = new ArrayList<Factura>();

        lista.add(new Factura("movil", 300));
        lista.add(new Factura("impresora", 200));
        lista.add(new Factura("ordenador", 1200));
        lista.add(new Factura("impresora", 400));
        lista.add(new Factura("imac", 1500));

        Factura facturaFiltro =
                lista.stream()
                        .filter(factura -> factura.getImporte() > 300)
                        .findFirst().get();

        System.out.println("UNICA :" + facturaFiltro.getImporte());

    }

}