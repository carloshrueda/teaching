/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.estructurascondicionales;

/**
 *
 * @author campusLive Server
 */
public class CondicionalSwitch {

    public static void main(String[] args) {
        int error = 200;
        //condicional switch
        switch (error) {
            case 200:
                System.out.println("Todo ok.");
                break;
            case 301:
                System.out.println("Movimiento permanente de la página.");
                break;
            case 302:
                System.out.println("Movimiento temporal de la página.");
                break;
            case 404:
                System.out.println("Página no encontrada.");
                break;
            case 500:
                System.out.println("Error interno del servidor.");
                break;
            case 503:
                System.out.println("Servicio no disponible.");
                break;
            default:
                System.out.println("Código de error no disponible.");
        }
    }
}
