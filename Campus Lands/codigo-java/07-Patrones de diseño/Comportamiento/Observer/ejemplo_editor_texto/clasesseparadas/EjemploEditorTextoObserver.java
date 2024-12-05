package clasesseparadas;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Gestor de eventos que administra suscriptores y notificaciones
class GestorEventos {
    Map<String, List<EscuchaEvento>> oyentes = new HashMap<>();

    public GestorEventos(String... operaciones) {
        for (String operacion : operaciones) {
            this.oyentes.put(operacion, new ArrayList<>());
        }
    }

    public void suscribir(String tipoEvento, EscuchaEvento oyente) {
        List<EscuchaEvento> usuarios = oyentes.get(tipoEvento);
        usuarios.add(oyente);
    }

    public void desuscribir(String tipoEvento, EscuchaEvento oyente) {
        List<EscuchaEvento> usuarios = oyentes.get(tipoEvento);
        usuarios.remove(oyente);
    }

    public void notificar(String tipoEvento, File archivo) {
        List<EscuchaEvento> usuarios = oyentes.get(tipoEvento);
        for (EscuchaEvento oyente : usuarios) {
            oyente.actualizar(tipoEvento, archivo);
        }
    }
}

// Editor de texto que dispara eventos de "abrir" y "guardar"
class EditorTexto {
    public GestorEventos eventos;
    private File archivo;

    public EditorTexto() {
        this.eventos = new GestorEventos("abrir", "guardar");
    }

    public void abrirArchivo(String rutaArchivo) {
        this.archivo = new File(rutaArchivo);
        eventos.notificar("abrir", archivo);
    }

    public void guardarArchivo() throws Exception {
        if (this.archivo != null) {
            eventos.notificar("guardar", archivo);
        } else {
            throw new Exception("Primero debe abrir un archivo.");
        }
    }
}

// Interfaz para los escuchas de eventos
interface EscuchaEvento {
    void actualizar(String tipoEvento, File archivo);
}

// Oyente que envía notificaciones por correo electrónico
class OyenteNotificacionEmail implements EscuchaEvento {
    private String correo;

    public OyenteNotificacionEmail(String correo) {
        this.correo = correo;
    }

    @Override
    public void actualizar(String tipoEvento, File archivo) {
        System.out.println("Correo a " + correo + ": Alguien realizó la operación " + tipoEvento
                + " con el archivo: " + archivo.getName());
    }
}

// Oyente que guarda un registro en un archivo de log
class OyenteRegistroLog implements EscuchaEvento {
    private File registro;

    public OyenteRegistroLog(String nombreArchivo) {
        this.registro = new File(nombreArchivo);
    }

    @Override
    public void actualizar(String tipoEvento, File archivo) {
        System.out.println("Guardar en registro " + registro + ": Alguien realizó la operación " + tipoEvento
                + " con el archivo: " + archivo.getName());
    }
}

// Clase principal para probar el patrón Observer
public class EjemploEditorTextoObserver {
    public static void main(String[] args) {
        EditorTexto editor = new EditorTexto();
        editor.eventos.suscribir("abrir", new OyenteRegistroLog("/ruta/al/archivo/log.txt"));
        editor.eventos.suscribir("guardar", new OyenteNotificacionEmail("admin@ejemplo.com"));

        try {
            editor.abrirArchivo("archivoPrueba.txt");
            editor.guardarArchivo();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
