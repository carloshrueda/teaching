/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.estructurascondicionales;

/**
 *
 * @author campusLive Server
 */
public class CondicionalCompuesta {

    public static void main(String[] args) {
        int calificacion = 75;
        if (calificacion >= 90) {
            System.out.println("Excelente trabajo, obtuviste una A.");
        } else if (calificacion >= 80) {
            System.out.println("Muy bien, obtuviste una B.");
        } else if (calificacion >= 70) {
            System.out.println("Buen esfuerzo, obtuviste una C.");
        } else if (calificacion >= 60) {
            System.out.println("Necesitas mejorar, obtuviste una D.");
        } else {
            System.out.println("Lo siento, has reprobado.");
        }
    }
}
