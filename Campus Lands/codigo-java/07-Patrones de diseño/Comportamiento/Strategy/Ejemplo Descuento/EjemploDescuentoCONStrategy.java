// Interfaz Estrategia
interface EstrategiaDescuento {
    double aplicarDescuento(double precio);
}

// Estrategia concreta: Sin descuento
class SinDescuento implements EstrategiaDescuento {
    @Override
    public double aplicarDescuento(double precio) {
        System.out.println("Sin descuento aplicado.");
        return precio;
    }
}

// Estrategia concreta: Descuento de temporada
class DescuentoTemporada implements EstrategiaDescuento {
    @Override
    public double aplicarDescuento(double precio) {
        System.out.println("Aplicando descuento de temporada.");
        return precio * 0.9; // 10% de descuento
    }
}

// Estrategia concreta: Descuento por promoción
class DescuentoPromocion implements EstrategiaDescuento {
    @Override
    public double aplicarDescuento(double precio) {
        System.out.println("Aplicando descuento por promoción.");
        return precio * 0.8; // 20% de descuento
    }
}

// Clase Contexto
class CarritoDeCompras {
    private EstrategiaDescuento estrategia;

    // Método para establecer la estrategia en tiempo de ejecución
    public void setEstrategia(EstrategiaDescuento estrategia) {
        this.estrategia = estrategia;
    }

    // Método que aplica la estrategia seleccionada
    public double calcularPrecioFinal(double precio) {
        if (estrategia == null) {
            throw new IllegalStateException("ERROR. Establezca una estrategia.");
        }
        return estrategia.aplicarDescuento(precio);
    }
}

// Clase Cliente
public class EjemploDescuentoCONStrategy {
    public static void main(String[] args) {
        CarritoDeCompras carrito = new CarritoDeCompras();
        double precioOriginal = 100.0;

        System.out.println("\n\nINICIO");

        // Sin descuento
        carrito.setEstrategia(new SinDescuento());
        System.out.println("Precio final: $" + carrito.calcularPrecioFinal(precioOriginal));

        // Descuento de temporada
        carrito.setEstrategia(new DescuentoTemporada());
        System.out.println("Precio final: $" + carrito.calcularPrecioFinal(precioOriginal));

        // Descuento por promoción
        carrito.setEstrategia(new DescuentoPromocion());
        System.out.println("Precio final: $" + carrito.calcularPrecioFinal(precioOriginal));
    }
}
