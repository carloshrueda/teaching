package patrones_diseno.creacionales.abstract_factory.gui;

public class InterfazDarkFactory implements InterFaceFactory {

    @Override
    public Boton crearBoton() {
        return new BotonDark();
    }

    @Override
    public CampoTexto crearCampoTexto() {
        return new CampoTextoDark();
    }
}
