package encapsulamiento_02;

public class Persona{
    private String nombre;

    public Persona(String n){
        nombre = n;
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}