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
public class EjemploFizzBuzz {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        
        System.out.print("Ingrese el valor de N [1, 10^4]: ");
        int n = entrada.nextInt();
        
        if ((n>=1) && (n < 10000 )) {
            String s = "";
            for(int i = 1; i <= n; ++i) {
                if ( (i%3 == 0)) {
                    if ((i%5 == 0)) {
                        s += ", FizzBuzz";
                    } else {
                        s += ", Fizz";
                    }
                } else if ((i%5 == 0)) 
                    s += ", Buzz";
                else 
                    s += ", " + String.valueOf(i);
            }
            
            System.out.println(s);
            
        } else {
            System.out.println("\nEl valor de n no está dentro del rango.");
        }
        
        entrada.close();
    }
}
