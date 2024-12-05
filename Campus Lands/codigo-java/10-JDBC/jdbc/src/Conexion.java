import java.sql.*;

public class Conexion {
    public static void main(String[] args) {
        // protocol//[hosts][/database][?properties]
        // Ejemplo jdbc:mysql://host1:33060/sakila
        String host = "jdbc:mysql://localhost:3306/";
        String user = "root";
        String pass = "toor";
        String db = "world";
        String cadconex = host + db;
        System.out.println(cadconex);
        try (Connection c = DriverManager.getConnection(cadconex, user, pass)) {
            try (Statement stmt = c.createStatement()) {
                try (ResultSet rs = stmt.executeQuery("select * from country limit 10")) {
                    while (rs.next()) {
                        System.out.println(rs.getString("NaMe"));
                    }

                }
            } catch (SQLException ex) {
                System.out.println("Error al crear Statement.\n" + ex.getMessage());
            }
        } catch (SQLException ex) {
            System.out.println("Error al conectar con la base de datos.\n" + ex.getMessage());
        }
    }
}
