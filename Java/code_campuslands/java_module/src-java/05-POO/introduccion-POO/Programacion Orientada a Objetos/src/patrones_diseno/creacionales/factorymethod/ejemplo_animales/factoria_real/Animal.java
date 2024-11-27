package patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_real;

import patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_simple1.Gato;
import patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_simple1.Pato;
import patrones_diseno.creacionales.factorymethod.ejemplo_animales.factoria_simple1.Perro;

public interface Animal {
    abstract void hacerSonido();
}
