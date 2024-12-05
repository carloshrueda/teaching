import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class LeerArchivo_01 {
    public static void main(String[] args) {
        String nombreArchivo = "mbox.txt";

        File archivo = new File(nombreArchivo);
        
        if (!archivo.exists()) {
            System.out.println("El archivo no existe");
            return;
        }

        FileReader fr = null;

        BufferedReader buffer = null;
        try {
            fr = new FileReader(archivo);
            buffer = new BufferedReader(fr);
            String linea;
            while ((linea = buffer.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (buffer != null) {
                    buffer.close();
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }
}
