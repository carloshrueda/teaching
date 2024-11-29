/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package EstructurasRepetitivas;

import java.util.Scanner;

/**
 *
 * @author campusLive Server
 */
public class FactorialDoWhile {

    public static void main(String[] args) {
        long n, m, fact;
        Scanner entrada = new Scanner(System.in);
        do {
            System.out.println("\nFactorial de número n, entre 2 y 20: ");
            n = entrada.nextLong();
        } while ((n < 2) || (n > 20));
        
        for (m = n, fact = 1; n > 1; fact *= n--);
        
        System.out.println(m + "! = " + fact);
    }
}
