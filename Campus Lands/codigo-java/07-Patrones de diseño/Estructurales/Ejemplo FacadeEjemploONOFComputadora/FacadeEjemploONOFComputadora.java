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

class ComputadoraFacade {
    private CPU cpu;
    private Memoria memoria;

    public ComputadoraFacade() {
        this.cpu = new CPU();
        this.memoria = new Memoria();
    }

    public void encender() {
        cpu.iniciar();
        memoria.cargarSistemaOperativo();
        System.out.println("Computadora encendida");
    }

    public void apagar() {
        memoria.liberarRecursos();
        cpu.apagar();
        System.out.println("Computadora apagada");
    }
}

public class FacadeEjemploONOFComputadora {
    public static void main(String[] args) {
        ComputadoraFacade computadora = new ComputadoraFacade();
        computadora.encender();
        System.out.println("Realizando algunas operaciones...");
        computadora.apagar();
    }
}