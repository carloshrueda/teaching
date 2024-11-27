package Excepciones_07;

// Creando mi Clase que implementa la clase AutoCloseable
class MiRecurso implements AutoCloseable {

    public void usarRecurso() {
        System.out.println("Usando recurso...");
    }

    @Override
    public void close() {
        System.out.println("Cerrando recurso...");
    }
}

public class MiTryConRecursos {
    public static void main(String[] args) {
        try (MiRecurso recurso = new MiRecurso()) {
            recurso.usarRecurso();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


/*
 * Fuente: https://keepcoding.io/blog/que-es-try-with-resources-en-java/
 * Ejemplos prácticos de try with resources

* Lectura de archivos con FileReader

 try (FileReader fileReader = new FileReader("archivo.txt")) {
    int data;
    while ((data = fileReader.read()) != -1) {
        System.out.print((char) data);
    }
} catch (IOException e) {
    e.printStackTrace();
}

*
* Uso con conexiones JDBC

try (Connection conn = DriverManager.getConnection(dbUrl);
     Statement stmt = conn.createStatement();
     ResultSet rs = stmt.executeQuery("SELECT * FROM empleados")) {

    while (rs.next()) {
        System.out.println("Empleado: " + rs.getString("nombre"));
    }
} catch (SQLException e) {
    e.printStackTrace();
}

 *
 * Imagen con Listado de clases que implementan AutoCloseable
 * Fuente: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMvDJerbq4ekGeyzXFynez6qfwLbZuatlCeQnwCj5kLKN-Q6bHJ-GuQFGaBI1-69Xc4PvN_ZxHxbB1-WAOSvlld97kxQp7xN1ef40gInw2OsnoLPhEbHGIPoL8eNCqOVqBdxeOx4_hSdt6/s1600/excepcion02.png
 * Tomado en: 2024-11-20
 */
