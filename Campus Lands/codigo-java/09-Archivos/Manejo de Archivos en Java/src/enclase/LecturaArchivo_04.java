package enclase;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class LecturaArchivo_04 {
    public static void main(String[] args) {
        File archivo = null;
        FileReader reader = null;
        BufferedReader buffer = null;



        try {
            javax.swing.JFileChooser j = new javax.swing.JFileChooser();
            j.showOpenDialog(j);
            String path = j.getSelectedFile().getAbsolutePath();
            archivo = new File(path);

            reader = new FileReader(archivo);
            buffer = new BufferedReader(reader);
            String linea;
            while ((linea = buffer.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (null != reader) {
                    reader.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }

}
