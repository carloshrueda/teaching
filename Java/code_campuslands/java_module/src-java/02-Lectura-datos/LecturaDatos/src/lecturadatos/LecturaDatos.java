/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package lecturadatos;

import java.util.Scanner;

/**
 *
 * @author campusLive Server
 */
public class LecturaDatos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner teclado = new Scanner(System.in);

        System.out.print("Cuantos datos ingresará? ");
        int cant = teclado.nextInt();

        int suma = 0;
        for (int i = 0; i < cant; i++) {
            int num = teclado.nextInt();
            suma += num;
        }

        float prom = suma / cant;
        System.out.println("\nEl promedio es: " + prom);

    }

}
