package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

public class PruebaEmpresa {
    public static void main(String[] args) {

        // Departamento Comercial
        Departamento depComercial = new ComercialDepartamento();

        // Empleado comerciales
        Empleado eDesign1 = new EmpleadoDisenador("Javier", 35);
        Empleado eDesign2 = new EmpleadoDisenador("Jane", 20);

        // Agregar empleados al departamento Comerial
        depComercial.addEmpleado(eDesign1);
        depComercial.addEmpleado(eDesign2);
        // System.out.println(depComercial.informacion());
        // System.out.println("=".repeat(25) + "\n");

        // Departamento Desarrollo
        Departamento depDev = new DesarrolloDepartamento();

        // Empleado Desarrollador
        Empleado dev1 = new EmpleadoDesarrollador("Carlos", 35);
        Empleado dev2 = new EmpleadoDesarrollador("Catalina", 20);

        // Agregar empleados al departamento de Desarrollo
        depDev.addEmpleado(dev1);
        depDev.addEmpleado(dev2);
        //System.out.println(depDev.informacion());
        //System.out.println("=".repeat(25) + "\n");

        // ---
        // Usando interfaz Iempresa

        // Departamento Administrativo
        Departamento depAdmin = new ComercialDepartamento();
                // Empleado Administrativos
        Empleado eAdmin1 = new EmpleadoAdministrativo("Martha", 22);
        Empleado eAdmin2 = new EmpleadoAdministrativo("Maria", 20);

        // Agregar empleados al departamento Administrativo
        depAdmin.addEmpleado(eAdmin1);
        depAdmin.addEmpleado(eAdmin2);


        // Area administrativa
        AreaEmpresa areaAdmin = new AreaEmpresa("Administrativa");
        areaAdmin.add(depComercial, depAdmin);
        System.out.println(areaAdmin.informacion());

        // Area ingenieria
        AreaEmpresa areaInge = new AreaEmpresa("Ingenieria");
        areaInge.add(depDev);
        System.out.println(areaInge.informacion());

    }
}
