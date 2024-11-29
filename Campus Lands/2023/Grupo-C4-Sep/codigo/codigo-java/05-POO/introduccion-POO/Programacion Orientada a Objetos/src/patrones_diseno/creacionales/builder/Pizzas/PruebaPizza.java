package patrones_diseno.creacionales.builder.Pizzas;

public class PruebaPizza {
    public static void main(String[] args) {
        Cocina cocina = new Cocina();
        HawaianaPizzaBuilder hawaii_pizzaBuilder = new HawaianaPizzaBuilder();

        cocina.setPizzaBuilder(hawaii_pizzaBuilder);
        cocina.construirPizza();

        Pizza pizza = cocina.getPizza();
        System.out.println(pizza.toString());

        PicantePizzaBuilder picante = new PicantePizzaBuilder();
        cocina.setPizzaBuilder(picante);
        cocina.construirPizza();

        pizza = cocina.getPizza();
        System.out.println(pizza.toString());

    }
}
