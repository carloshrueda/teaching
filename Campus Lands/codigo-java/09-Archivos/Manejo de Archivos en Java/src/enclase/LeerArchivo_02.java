import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class LeerArchivo_02 {
    public static void main(String[] args) {
        String nombreArchivo = "mbox.txt";

        File archivo = new File(nombreArchivo);

        if (!archivo.exists()) {
            System.out.println("El archivo no existe");
            return;
        }

        try (BufferedReader buffer = new BufferedReader(new FileReader(archivo))) {
            String linea;
            while ((linea = buffer.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } 
    }
}
