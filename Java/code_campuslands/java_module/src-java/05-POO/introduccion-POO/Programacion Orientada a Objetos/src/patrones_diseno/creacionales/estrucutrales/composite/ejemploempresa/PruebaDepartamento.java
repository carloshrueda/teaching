package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

public class PruebaDepartamento {
    public static void main(String[] args) {
        Departamento dep = new ComercialDepartamento();

        Empleado e1 = new EmpleadoAdministrativo("Javier", 35);
        Empleado e2 = new EmpleadoDesarrollador("Jane", 20);

        System.out.println(e1.informacion());
        System.out.println(e2.informacion());

        System.out.println("=".repeat(25) + "\n");

        dep.addEmpleado(e1);
        dep.addEmpleado(e2);

        System.out.println(dep.informacion());
    }
}
