package patrones_diseno.creacionales.singleton.ejemplo_configuracion;

public class Configuracion {
    private String servidor;
    private String puerto;
    private String usuario;
    private String clave;

    private static Configuracion instacia;

    private Configuracion(String servidor, String puerto, String usuario, String clave) {
        this.servidor = servidor;
        this.puerto = puerto;
        this.usuario = usuario;
        this.clave = clave;
    }

    public static Configuracion obtenerConfiguracion() {
        if (instacia == null) {
            instacia = new Configuracion("servidor1", "8050", "daniel", "1234");
        }

        return instacia;
    }

    @Override
    public String toString() {
        return "Srv: " + servidor + " Pto: " + puerto + " Usu: " + usuario + " Clave: " + clave;
    }
}

class PruebaConfiguracion {
    public static void main(String[] args) {
        Configuracion configuracion1 = Configuracion.obtenerConfiguracion();
        Configuracion config2 = Configuracion.obtenerConfiguracion();

        System.out.println(configuracion1);
        System.out.println(config2);
    }
}
