package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

public class EmpleadoAdministrativo extends Empleado {
    public EmpleadoAdministrativo(String nombre, int edad) {
        super(nombre, edad);
        tipoEmpleado = TipoEmpleado.Administrador;
    }

    @Override
    public String informacion() {
        return "Nombre: " + nombre + " (" + tipoEmpleado + ") "+
                "Edad: " + edad;
    }
}
