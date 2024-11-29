package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

public class EmpleadoDesarrollador extends Empleado {
    public EmpleadoDesarrollador(String nombre, int edad) {
        super(nombre, edad);
        tipoEmpleado = TipoEmpleado.Desarrollador;
    }


    @Override
    public String informacion() {
        return "Nombre: " + nombre + " (" + tipoEmpleado + ") "+
                "Edad: " + edad;
    }
}
