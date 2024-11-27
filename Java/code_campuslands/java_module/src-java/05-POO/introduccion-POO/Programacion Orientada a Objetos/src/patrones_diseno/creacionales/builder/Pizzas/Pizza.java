package patrones_diseno.creacionales.builder.Pizzas;

public class Pizza {
    private String masa = "";
    private String salsa = "";
    private String relleno = "";
    private String tipo = "";

    public void setMasa(String masa) {
        this.masa = masa;
    }

    public void setSalsa(String salsa) {
        this.salsa = salsa;
    }

    public void setRelleno(String relleno) {
        this.relleno = relleno;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Tipo: " + tipo;
    }
}
