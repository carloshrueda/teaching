package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

public abstract class Empleado implements IRecursoEmpresa {
    protected String nombre;
    protected int edad;
    protected TipoEmpleado tipoEmpleado;

    public Empleado(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
        tipoEmpleado = null;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public TipoEmpleado getTipoEmpleado() {
        return tipoEmpleado;
    }

    abstract public String informacion();
}
