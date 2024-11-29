package patrones_diseno.creacionales.builder.Pizzas;

public class HawaianaPizzaBuilder extends PizzaBuilder {

    @Override
    public void buildMasa() {
        pizza.setMasa("Suave");
    }

    @Override
    public void buildSalsa() {
        pizza.setSalsa("dulce");
    }

    @Override
    public void buildRelleno() {
        pizza.setRelleno("Piña y Queso");
    }

    public Pizza getPizza() {
        return pizza;
    }

    public void crearNuevaPizza() {
        pizza = new Pizza();
        pizza.setTipo("Hawaiiana");
    }
}
