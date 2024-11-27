/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Conversiones;

/**
 *
 * @author campusLive Server
 */
public class ConversionesImplicitas {

    public static void main(String[] args) {
        /*
         * La conversión implícita ocurre cuando se asigna un valor de un tipo 
         * de dato más pequeño a una variable de un tipo de dato más grande sin 
         * perder información. Esto sucede de forma automática por el compilador 
         * de Java.
         */

        int intVariable = 25;
        long longVariable = intVariable;
        float floatVariable = longVariable;
        double doubleVariable = floatVariable;
        System.out.println("Valor Entero: " + intVariable);
        System.out.println("Valor Long: " + longVariable);
        System.out.println("Valor Float: " + floatVariable);
        System.out.println("Valor Double: " + doubleVariable);
    }
}
