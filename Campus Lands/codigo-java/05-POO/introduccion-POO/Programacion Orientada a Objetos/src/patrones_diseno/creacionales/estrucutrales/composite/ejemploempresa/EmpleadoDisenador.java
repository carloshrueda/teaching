package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

public class EmpleadoDisenador extends Empleado {
    public EmpleadoDisenador(String nombre, int edad) {
        super(nombre, edad);
        tipoEmpleado = TipoEmpleado.Disenador;
    }

    @Override
    public String informacion() {
        return "Nombre: " + nombre + " (" + tipoEmpleado + ") "+
                "Edad: " + edad;
    }
}
