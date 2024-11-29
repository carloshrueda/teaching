package herencia_03;

public class Estudiante extends Usuario {
    private String codigoEstudiante;

    public Estudiante(String nombre, String apellido, String codigoEstudiante) {
        super(nombre, apellido);
        this.codigoEstudiante = codigoEstudiante;
    }

    public String getCodigoEstudiante() {
        return codigoEstudiante;
    }

    public void setCodigoEstudiante(String codigoEstudiante) {
        this.codigoEstudiante = codigoEstudiante;
    }
}
