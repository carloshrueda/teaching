class MyInterface {
  metodo1() {
    throw new Error("metodo1 debe ser implementado");
  }

  metodo2() {
    throw new Error("metodo2 debe ser implementado");
  }
}

class MyClassA extends MyInterface {
  metodo1() {
    console.log("Implementación del metodo1 en Clase A");
  }

  metodo2() {
    console.log("Implementación del metodo2 en Clase A");
  }
}

class MyClassB extends MyInterface {
  metodo1() {
    console.log("Implementación del metodo1 en Clase B");
  }
}

const instanceA = new MyClassA();
// Salida: "Implementación del metodo1 en Clase A"
instanceA.metodo1(); 
// Salida: "Implementación del metodo2 en Clase A"
instanceA.metodo2(); 

const instanceB = new MyClassB();
// Salida: "Implementación del method1 en Clase B
instanceB.metodo1(); 
// Lanza un error, el metodo 2 no está implementado en claseB
instanceB.metodo2(); 
