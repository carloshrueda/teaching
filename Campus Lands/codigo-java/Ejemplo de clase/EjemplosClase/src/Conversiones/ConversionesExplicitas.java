/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Conversiones;

/**
 *
 * @author campusLive Server
 */
public class ConversionesExplicitas {

    public static void main(String[] args) {
        double doubleVariable = 135.78;
        //explicit type casting
        long longVariable = (long) doubleVariable;
        
        //explicit type casting
        int intVariable = (int) longVariable;
        
        System.out.println("Double: " + doubleVariable);
        System.out.println("Long: " + longVariable);
        System.out.println("Integer: " + intVariable);
        char charVariable = 'A';
        
        //explicit type casting
        int intVariable1 = (int) charVariable;
        System.out.println("\nValor entero de: " + charVariable + " is " + 
                intVariable1);
        
        //explicit type casting
        long longVariable1 = (long) intVariable1;
        System.out.println("Long: " + longVariable1);
    }
}
