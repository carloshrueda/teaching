package arrays_04;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Estudiante {
    private String codigo;
    private String nombre;
    private double[] notas;
    private final double[] pesos;
    private double promedio;

    Estudiante() {
        codigo = "";
        nombre = "";
        notas = new double[3];
        pesos = new double[] {30.0, 30.0, 40.0};
        promedio = 0.0;
    }

    public Estudiante(String codigo, String nombre, double[] notas) {
        this();
        this.codigo = codigo;
        this.nombre = nombre;
        this.notas = notas;
        setPromedio();
    }

    public Estudiante(String codigo, String nombre,
                      double nota1, double nota2, double nota3) {
        this();
        this.codigo = codigo;
        this.nombre = nombre;
        this.notas[0] = nota1;
        this.notas[1] = nota2;
        this.notas[2] = nota3;
        setPromedio();
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double[] getNotas() {
        return notas;
    }

    public void setNotas(double[] notas) {
        this.notas = notas;
        setPromedio();
    }

    public void setNotas(double nota1, double nota2, double nota3) {
        this.notas[0] = nota1;
        this.notas[1] = nota2;
        this.notas[2] = nota3;
        setPromedio();
    }

    public double getPromedio() {
        return promedio;
    }

    private void setPromedio() {
        double suma = 0.0;
        for(int i=0; i < this.notas.length; i++) {
            suma += this.notas[i] * (this.pesos[i] / 100.0);
        }
        this.promedio = suma;
    }
}

public class CalificacionEstudiantes {
    public static void main(String[] args) {
        List<Estudiante> lstests = new ArrayList<Estudiante>();
        char op = 'S';
        Scanner input = new Scanner(System.in);
        int cest = 1;

        do {
            System.out.println("Estudiante # "+ cest);
            System.out.print("\tCódigo? ");
            String cod = input.nextLine();
            System.out.print("\tNombre? ");
            String nombre = input.nextLine();
            System.out.print("\tNota 1? ");
            double nota1 = input.nextDouble();
            System.out.print("\tNota 2? ");
            double nota2 = input.nextDouble();
            System.out.print("\tNota 3? ");
            double nota3 = input.nextDouble();

            Estudiante est = new Estudiante(cod, nombre, nota1, nota2, nota3);
            lstests.add(est);

            System.out.println("Promedio estudiante: " + est.getPromedio());
            System.out.println(est.getPromedio() > 3.0 ? "APROBO" : "REPROBO");
            System.out.println("=".repeat(30) + "\n");

            input.nextLine();
            System.out.print(">>> ¿Desea continuar (S/N)? ");
            op = input.nextLine().trim().toUpperCase().charAt(0);

            System.out.println("=".repeat(30) + "\n");

        } while (op != 'N');
    }
}
