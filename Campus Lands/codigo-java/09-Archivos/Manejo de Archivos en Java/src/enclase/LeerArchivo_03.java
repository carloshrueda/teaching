package enclase;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class LeerArchivo_03 {
    public static void main(String[] args) {
        String nombre = "mbox.txt";
        File archivo = new File(nombre);

        if (!archivo.exists()) {
            System.out.println("El archivo no existe");
            return;
        }

        try (BufferedReader br = new BufferedReader(new FileReader(archivo))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            System.out.println("Error al leer el archivo\n" + e.getMessage());
        }
    }
}
