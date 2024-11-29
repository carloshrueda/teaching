package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

import java.util.ArrayList;
import java.util.List;

public class Departamento implements IRecursoEmpresa {
    private List<IRecursoEmpresa> lista = new ArrayList<IRecursoEmpresa>();
    protected TipoDepartamento tipoDepartamento = null;

    public void addEmpleado(IRecursoEmpresa e) {
        lista.add(e);
    }

    @Override
    public String informacion() {
        if (tipoDepartamento == null) return "";

        StringBuilder str = new StringBuilder("Empleado del Departamento " + tipoDepartamento + "\n");

        for (IRecursoEmpresa departamento : lista) {
            str.append("\t").append(departamento.informacion()).append("\n");
        }

        return str.toString();
    }
}
