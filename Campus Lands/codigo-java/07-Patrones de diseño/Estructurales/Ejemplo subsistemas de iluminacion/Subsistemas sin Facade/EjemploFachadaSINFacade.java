// Subsistema A: Sistema de Iluminación
class SistemaIluminacion {
    public void atenuarLuces() {
        System.out.println("Luces atenuadas.");
    }

    public void apagarLuces() {
        System.out.println("Luces apagadas.");
    }
}

// Subsistema B: Sistema de Sonido
class SistemaSonido {
    public void configurarSonidoEnvolvente() {
        System.out.println("Sonido envolvente configurado.");
    }

    public void silenciar() {
        System.out.println("Sonido en silencio.");
    }
}

// Subsistema C: Sistema de Proyección
class SistemaProyeccion {
    public void encender() {
        System.out.println("Proyector encendido.");
    }

    public void reproducirPelicula(String pelicula) {
        System.out.println("Reproduciendo película: " + pelicula);
    }

    public void apagar() {
        System.out.println("Proyector apagado.");
    }
}

// Cliente: Interacción con el sistema
public class EjemploFachadaSINFacade {
    public static void main(String[] args) {
        // Creacion de los subsistemas
        SistemaIluminacion iluminacion = new SistemaIluminacion();
        SistemaSonido sonido = new SistemaSonido();
        SistemaProyeccion proyeccion = new SistemaProyeccion();

        // Subsistemas para ver pelicula "ORIGEN"
        System.out.println("Preparando el sistema para ver una película...");
        iluminacion.atenuarLuces();
        sonido.configurarSonidoEnvolvente();
        proyeccion.encender();
        proyeccion.reproducirPelicula("ORIGEN");

        // Apagando los subsistemas
        System.out.println("Apagando el sistema...");
        proyeccion.apagar();
        iluminacion.apagarLuces();
        sonido.silenciar();
    }
}
