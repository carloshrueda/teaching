package relaciones_06;

public class Bateria {
    private final int mAh;
    private final String marca;

    public Bateria(int mAh, String marca) {
        this.mAh = mAh;
        this.marca = marca;
    }

    public void mostrar() {
        System.out.println("Cantidad mAh:" + mAh);
        System.out.println("Marca: " + marca);
    }
}
