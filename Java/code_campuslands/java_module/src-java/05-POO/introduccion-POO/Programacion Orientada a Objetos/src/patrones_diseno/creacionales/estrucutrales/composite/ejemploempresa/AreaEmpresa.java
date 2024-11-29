package patrones_diseno.creacionales.estrucutrales.composite.ejemploempresa;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AreaEmpresa implements IEmpresa {
    List<IEmpresa> recursosEmpresa = new ArrayList<IEmpresa>();
    String areaEmpresa;

    AreaEmpresa(String recursosEmpresa) {
        this.areaEmpresa = recursosEmpresa;
    }

    public void add(IEmpresa empresa) {
        recursosEmpresa.add(empresa);
    }

    public void add(IEmpresa ...empresa) {
        recursosEmpresa.addAll(Arrays.asList(empresa));
    }


    @Override
    public String informacion() {
        StringBuilder sb = new StringBuilder();


        System.out.println("[AREA " + areaEmpresa.toUpperCase() + "]");
        for (IEmpresa recurso : recursosEmpresa) {
            sb.append(recurso.informacion());
        }

        return sb.toString();
    }
}
