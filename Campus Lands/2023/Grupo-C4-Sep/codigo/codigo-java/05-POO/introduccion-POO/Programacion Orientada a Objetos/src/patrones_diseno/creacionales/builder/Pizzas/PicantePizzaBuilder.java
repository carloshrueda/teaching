package patrones_diseno.creacionales.builder.Pizzas;

public class PicantePizzaBuilder extends PizzaBuilder {
    @Override
    public void buildMasa() {
        pizza.setMasa("Cocida");
    }

    @Override
    public void buildSalsa() {
        pizza.setSalsa("picante");
    }

    @Override
    public void buildRelleno() {
        pizza.setRelleno("Pimienta y Peropni");
    }

    public Pizza getPizza() {
        return pizza;
    }

    public void crearNuevaPizza() {
        pizza = new Pizza();
        pizza.setTipo("Picante");
    }
}
