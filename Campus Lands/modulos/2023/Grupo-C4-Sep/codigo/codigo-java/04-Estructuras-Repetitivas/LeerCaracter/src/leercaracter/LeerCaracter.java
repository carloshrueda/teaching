/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package leercaracter;

import java.util.Scanner;

/**
 *
 * @author campusLive Server
 */
public class LeerCaracter {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        char digito;
        do {
            System.out.println("Introduzca un digito (0-9): ");
            digito = scan.nextLine().charAt(0);
        } while ((digito < '0') || (digito > '9'));
    }

}
