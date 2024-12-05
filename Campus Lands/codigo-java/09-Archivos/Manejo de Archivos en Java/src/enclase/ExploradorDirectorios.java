package enclase;

import java.io.File;
import java.util.ArrayList;

public class ExploradorDirectorios {
    public static void main(String[] args) {
        // Ruta inicial del directorio (puedes cambiarla según tu sistema)
        String rutaInicial = "C:/TEMP/ONEDRIVE/Trabajo/Campus Lands/Modulos";
        File carpetaRaiz = new File(rutaInicial);

        if (!carpetaRaiz.exists() || !carpetaRaiz.isDirectory()) {
            System.out.println("La ruta especificada no es válida o no es un directorio.");
            return;
        }

        // Lista para manejar los directorios
        ArrayList<File> listaDirectorios = new ArrayList<>();
        listaDirectorios.add(carpetaRaiz);

        // Almacenar resultados
        ArrayList<String> resultadosDirectorios = new ArrayList<>();
        ArrayList<String> resultadosArchivos = new ArrayList<>();

        System.out.println("Explorando la carpeta: " + carpetaRaiz.getAbsolutePath());

        for (int i = 0; i < listaDirectorios.size(); i++) {
            File directorioActual = listaDirectorios.get(i);

            // Lista todos los archivos y subdirectorios
            File[] contenido = directorioActual.listFiles();
            if (contenido == null) {
                continue; // Puede ser por permisos o errores en el acceso
            }

            long pesoDirectorio = 0;

            for (File archivo : contenido) {
                if (archivo.isDirectory()) {
                    // Agregar subdirectorio a la lista
                    listaDirectorios.add(archivo);
                } else {
                    // Sumar el tamaño del archivo al peso del directorio
                    pesoDirectorio += archivo.length();

                    // Verificar si el archivo tiene extensión .java o .py
                    if (archivo.getName().endsWith(".java") || archivo.getName().endsWith(".py")) {
                        resultadosArchivos.add(String.format(
                                "Archivo: %s (%.2f KB)",
                                archivo.getAbsolutePath(),
                                archivo.length() / 1024.0
                        ));
                    }
                }
            }

            // Guardar el peso total del directorio actual
            resultadosDirectorios.add(String.format(
                    "Directorio: %s (%.2f KB)",
                    directorioActual.getAbsolutePath(),
                    pesoDirectorio / 1024.0
            ));
        }

        // Imprimir resultados
        System.out.println("\n--- Pesos de Directorios ---");
        for (String resultado : resultadosDirectorios) {
            System.out.println(resultado);
        }

        System.out.println("\n--- Archivos .java y .py ---");
        for (String resultado : resultadosArchivos) {
            System.out.println(resultado);
        }
    }
}
