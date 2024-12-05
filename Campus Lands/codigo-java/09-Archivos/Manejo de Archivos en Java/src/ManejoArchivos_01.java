import java.io.File;

public class ManejoArchivos_01 {

    public static void main(String[] args) {
        File archivo = new File("mbox.txt");

        System.out.println("Existe? " + archivo.exists());
        System.out.println("Es un archivo: " + archivo.isFile());
        System.out.println("Se puede leer? " + archivo.canRead());
        System.out.println("Se puede escribir? " + archivo.canWrite());

    }
}