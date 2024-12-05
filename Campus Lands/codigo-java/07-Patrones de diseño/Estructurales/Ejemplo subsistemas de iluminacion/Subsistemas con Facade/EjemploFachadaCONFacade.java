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

// Fachada: Interfaz simplificada
class CineEnCasaFachada {
    private SistemaIluminacion iluminacion;
    private SistemaSonido sonido;
    private SistemaProyeccion proyeccion;

    public CineEnCasaFachada() {
        this.iluminacion = new SistemaIluminacion();
        this.sonido = new SistemaSonido();
        this.proyeccion = new SistemaProyeccion();
    }

    public void verPelicula(String pelicula) {
        System.out.println("Preparando el sistema para ver una película...");
        iluminacion.atenuarLuces();
        sonido.configurarSonidoEnvolvente();
        proyeccion.encender();
        proyeccion.reproducirPelicula(pelicula);
    }

    public void finalizarPelicula() {
        System.out.println("Apagando el sistema...");
        proyeccion.apagar();
        iluminacion.apagarLuces();
        sonido.silenciar();
    }
}

// Cliente: Interacción con el sistema
public class EjemploFachadaCONFacade {
    public static void main(String[] args) {
        CineEnCasaFachada cineEnCasa = new CineEnCasaFachada();

        // Ver película
        cineEnCasa.verPelicula("ORIGEN");

        // Terminar la película
        cineEnCasa.finalizarPelicula();
    }
}
