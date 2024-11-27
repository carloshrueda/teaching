# Palabras clave throw & throws

## throw

La palabra clave *throw* se utiliza para crear explícitamente una excepción única. Puede utilizar *la* palabra clave throw si sabe que una excepción puede ocurrir definitivamente para una condición particular.

```java
public static void ocurrir() {
  // condición
  throw new ArithmeticException();
}

public static void main(String[] args) {
  try {
    occur();
  } catch(Excepción e) {
    // handle
  }
}
```



## throws

Puede utilizar la palabra clave *throws* para declarar varias excepciones que sabe que se producirán en un método determinado.

```java
public static void occur() throws Exception1, Exception2, Exception3 {
  // condiciones que lanzan diferentes excepciones
}

public static void main(String[] args) {
  try {
    occur();
  } catch(Exception1 e) {
    //...
  } catch(Exception2 e) {
    //...
  } catch(Exception3 e) {
    //...
  }
}
```