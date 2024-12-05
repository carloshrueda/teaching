package relaciones_06;

public class SmartPhone {
    private final String modelo;
    private final Bateria bateria;
    private int nroChips;
    private final Chip[] chips;

    public SmartPhone(String modelo, int cantMah, String marcaBateria) {
        this.modelo = modelo;
        this.bateria = new Bateria(cantMah, marcaBateria);
        this.nroChips = 0;
        this.chips = new Chip[2];
    }

    public void mostrar() {
        System.out.println("Modelo: " + this.modelo);
        bateria.mostrar();
        System.out.println("Nro de Chips: " + this.nroChips);
        for(Chip chip : chips) {
            System.out.println(chip);
        }
    }

    public void agregarChip(Chip chip) {
        if (nroChips < 2) {
            chips[nroChips] = chip;
            nroChips++;
        }
    }
}

class pruebaSmartPhone {
    public static void main(String[] args) {
        SmartPhone cel = new SmartPhone("A10PRO", 3400,
                "Samsung");

        Chip entel = new Chip("Entel", "79033881");
        Chip tigo = new Chip("Tigo", "69920081");

        cel.agregarChip(entel);
        cel.agregarChip(tigo);

        cel.mostrar();
    }
}
