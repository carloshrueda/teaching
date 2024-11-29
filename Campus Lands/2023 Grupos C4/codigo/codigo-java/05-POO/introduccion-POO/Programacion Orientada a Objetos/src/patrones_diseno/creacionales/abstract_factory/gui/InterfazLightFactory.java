package patrones_diseno.creacionales.abstract_factory.gui;

public class InterfazLightFactory implements InterFaceFactory {
    @Override
    public Boton crearBoton() {
        return new BotonLight();
    }

    @Override
    public CampoTexto crearCampoTexto() {
        return new CampoTextoLight();
    }
}
