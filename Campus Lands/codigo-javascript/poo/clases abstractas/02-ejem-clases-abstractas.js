class AbstractClass {
    constructor() {
        if (new.target === AbstractClass) {
            throw new Error("No se puede instanciar.");
        }
    }

    abstractMethod() {
        throw new Error("Método abstractMethod no implementado");
    }

    normalMethod() {
        console.log("Método normal");
    }
}

class ConcreteClass extends AbstractClass {
    normalMethod() {
        console.log("Implementación método abstracto");
    }
}


const instancia = new ConcreteClass();
instancia.abstractMethod();
instancia.normalMethod();

// Error por que al intentar instanciar una clase abstracta​
const abstractInstancia = new AbstractClass();




