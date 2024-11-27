/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package EstructurasRepetitivas;

/**
 *
 * @author campusLive Server
 */
public class ComparandoCadenas {

    public static void main(String[] args) {
        String s1 = new String("banana");
        String s2 = new String("banana");

        System.out.println(s1.equals(s2));  //true 
        System.out.println(s1 == s2);   //false

        String s3 = "abacaxi";
        String s4 = "abacaxi";

        System.out.println(s3.equals(s4));  //true		
        System.out.println(s3 == s4);   //true; 
    }
}
