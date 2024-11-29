/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.estructurascondicionales;

/**
 *
 * @author campusLive Server
 */
public class CondicionalTernarioCondicional {

    public static void main(String[] args) {
        int aprobados = 1;
        // Condicional usando IF - ELSE
        if (aprobados == 1) {
            System.out.println("ha aprobado " + aprobados + " un alumno");
        } else {
            System.out.println("han aprobado " + aprobados + " alumnos");
        }
        
        // Condicional usando el OPERADOR TERNARIO CONDICIONAL
        System.out.println((aprobados == 1 ? "ha" : "han") 
                + " aprobado " + aprobados 
                + (aprobados == 1 ? " un alumno" : " alumnos"));
    }
}
