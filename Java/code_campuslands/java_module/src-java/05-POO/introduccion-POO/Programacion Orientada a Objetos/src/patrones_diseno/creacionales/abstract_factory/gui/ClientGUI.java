package patrones_diseno.creacionales.abstract_factory.gui;

public class ClientGUI {
    public static void main(String[] args) {
        InterFaceFactory factoryLight = new InterfazLightFactory();
        Boton botonLight = factoryLight.crearBoton();

        botonLight.render();

        InterFaceFactory factoryDark = new InterfazDarkFactory();
        CampoTexto campoTextoDark = factoryDark.crearCampoTexto();

        campoTextoDark.render();
    }
}
