package enclase;

import javax.imageio.IIOException;
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;

public class EscribirArchivo_01 {

    public static void main(String[] args) {

        File archivo = null;
        FileWriter writer = null;
        PrintWriter pw = null;
        try {
            javax.swing.JFileChooser j = new javax.swing.JFileChooser();
            j.showOpenDialog(j);
            String path = j.getSelectedFile().getAbsolutePath();

            archivo = new File(path);
            writer = new FileWriter(archivo);
            pw = new PrintWriter(writer);

            for (int i = 0; i < 10; i++) {
                pw.println("Linea " + i);
            }
        } catch (IIOException e) {
            System.out.println("Error al escribir en disco. " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error al escribir en disco. " + e.getMessage());
        } finally {
            try {
                if (null != archivo) {
                    writer.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }
}
