class ClaseAbstracta {
    constructor() {
        if (new.target === ClaseAbstracta) {
            throw new Error("No se puede crear una instacia de esta clase.");
        }
    }

    metodoNormal() {
        console.log('Ejecución del método normal.');
    }

    metodoAbstracto() {
        throw new Error("El metodo no ha sido implementado.")
    }
}

class HijaAbstracta extends ClaseAbstracta {
    // metodoAbstracto() {
    //     console.log("Ejecución del método abstracto");
    // }
}

let obj2 = new HijaAbstracta();
obj2.metodoNormal();
obj2.metodoAbstracto();