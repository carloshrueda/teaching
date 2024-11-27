package encapsulamiento_02;

public class PersonaClase {
    private String nombre;

    public PersonaClase(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

class PruebaPersonaClase {
    public static void main(String[] args) {
        PersonaClase persona = new PersonaClase("Daniel");

        System.out.println(persona.getNombre());
    }
}
