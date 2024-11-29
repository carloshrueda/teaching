package herencia_03;

public class PruebaHerenciaUsuario {
    public static void main(String[] args) {
        Estudiante est = new Estudiante("Pedro",
                                        "Perez",
                                  "123");

        System.out.println(est.getNombre());
        System.out.println(est);
    }
}
