import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// La clase notificadora base incluye código de gestión de
// suscripciones y métodos de notificación.
class EventManager {
    private Map<String, List<EventListener>> listeners = new HashMap<>();

    public void subscribe(String eventType, EventListener listener) {
        listeners.computeIfAbsent(eventType, k -> new ArrayList<>()).add(listener);
    }

    public void unsubscribe(String eventType, EventListener listener) {
        List<EventListener> users = listeners.get(eventType);
        if (users != null) {
            users.remove(listener);
        }
    }

    public void notify(String eventType, String data) {
        List<EventListener> users = listeners.get(eventType);
        if (users != null) {
            for (EventListener listener : users) {
                listener.update(data);
            }
        }
    }
}

// El notificador concreto contiene lógica de negocio real, de
// interés para algunos suscriptores.
class Editor {
    public EventManager events;
    private File file;

    public Editor() {
        this.events = new EventManager();
    }

    public void openFile(String path) {
        this.file = new File(path);
        events.notify("open", file.getName());
    }

    public void saveFile() throws IOException {
        try (FileWriter writer = new FileWriter(file)) {
            writer.write("File content");
        }
        events.notify("save", file.getName());
    }
}

// Aquí está la interfaz suscriptora.
interface EventListener {
    void update(String filename);
}

// Los suscriptores concretos reaccionan a las actualizaciones
// emitidas por el notificador al que están unidos.
class LoggingListener implements EventListener {
    private File log;
    private String message;

    public LoggingListener(String logFilename, String message) {
        this.log = new File(logFilename);
        this.message = message;
    }

    @Override
    public void update(String filename) {
        try (FileWriter writer = new FileWriter(log, true)) {
            writer.write(message.replace("%s", filename) + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class EmailAlertsListener implements EventListener {
    private String email;
    private String message;

    public EmailAlertsListener(String email, String message) {
        this.email = email;
        this.message = message;
    }

    @Override
    public void update(String filename) {
        // Simulate sending an email
        System.out.println("Email to " + email + ": " + message.replace("%s", filename));
    }
}

// Una aplicación puede configurar notificadores y suscriptores
// durante el tiempo de ejecución.
class Application {
    public static void main(String[] args) {
        Editor editor = new Editor();

        LoggingListener logger = new LoggingListener(
                "/path/to/log.txt",
                "Someone has opened the file: %s");
        editor.events.subscribe("open", logger);

        EmailAlertsListener emailAlerts = new EmailAlertsListener(
                "admin@example.com",
                "Someone has changed the file: %s");
        editor.events.subscribe("save", emailAlerts);
    }
}