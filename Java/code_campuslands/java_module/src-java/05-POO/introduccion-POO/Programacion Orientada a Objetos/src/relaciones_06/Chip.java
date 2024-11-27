package relaciones_06;

public class Chip {
    private final String empresa;
    private final String numero;

    public Chip(String empresa, String numero) {
        this.empresa = empresa;
        this.numero = numero;
    }

    @Override
    public String toString() {
        return "Fabricante: " + empresa + ". Número: " + numero;
    }
}


