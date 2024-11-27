package introduccion_01;

public class Animal {
    String tipo;
    int edad;

    public Animal(String nuevoIipo) {
        tipo = nuevoIipo;
    }

    public Animal(String tipo, int edad) {
        this.tipo = tipo;
        this.edad = edad;
    }


    public int getEdad() {
        return edad;
    }

    public void setEdad(int nuevoEdad) {
        edad = nuevoEdad;
    }

    public String getTipo() {
        return tipo;
    }
}
