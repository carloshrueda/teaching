package enclase;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class ClaseFile {
    public static void main(String[] args) {
        File archivo = new File("mbox.txt");

        // Trabajando con directorio
        File direc = new File("C:/Temp/archivosclase");
        System.out.println("Existe el directorio? " + direc.exists());
        if (!direc.exists()) {
            System.out.println("Estado creación del directorio: " + direc.mkdir());
        } else {
            System.out.println("Es un directorio? " + direc.isDirectory());
        }

        File direc2 = new File("C:/Temp/archivosclase/sesiones/archivos");
        // direc2.mkdirs();


        System.out.println("Existe mbox.txt? " + archivo.exists());
        System.out.println("Es un archivo? " + archivo.isFile());
        System.out.println("Se puede leer? " + archivo.canRead());
        System.out.println("Se puede escribir? " + archivo.canWrite());
        System.out.println(archivo.renameTo(new File("mbox-orig.txt")));

        File archivo2 = new File("mbox-orig.txt");
        if (archivo2.exists()) {
            System.out.println("Borrando el archivo: " + archivo2.delete());
        } else {
            System.out.println("No se encontró el archivo");
        }



    }
}
