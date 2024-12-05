class CPU {
    public void iniciar() {
        System.out.println("CPU iniciada");
    }

    public void apagar() {
        System.out.println("CPU apagada");
    }
}

class Memoria {
    public void cargarSistemaOperativo() {
        System.out.println("Sistema operativo cargado en la memoria");
    }

    public void liberarRecursos() {
        System.out.println("Recursos liberados");
    }
}

public class SinFacadeEjemploONOFComputadora {
    public static void main(String[] args) {
        CPU cpu = new CPU();
        Memoria memoria = new Memoria();

        // Encender la computadora
        cpu.iniciar();
        memoria.cargarSistemaOperativo();
        System.out.println("Computadora encendida");

        // Algun proceso en la computadora
        System.out.println("Realizando algunas operaciones...");

        // Apagar la computadora
        memoria.liberarRecursos();
        cpu.apagar();
        System.out.println("Computadora apagada");
    }
}