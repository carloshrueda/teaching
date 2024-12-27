class Figura {
    static cantidad = 0;
    #color;
    constructor(color) {
        this.#color = color;
        ++Figura.cantidad;

        if (new.target === Figura) {
            throw new Error("No se puede instanciar.");
        }
    }

    set color(color) {
        // console.log("SET COLOR")
        this.#color = color;
    }

    get color() {
        // console.log("GET COLOR")
        return this.#color;
    }

    calcularArea() {
        throw new Error("Método calcularArea no implementado");
     }
    calcularPerimetro() {
        throw new Error("Método calcularPerimetro no implementado");
     }
}

// let f = new Figura("Rojo");
// console.log("Color: ", f.Color);
// console.log("Color: ", f.color);

class Cuadrado extends Figura {
    #lado;
    constructor(color, lado) {
        super(color);
        this.#lado = lado;
    }

    set lado(lado) {
        this.#lado = lado;
    }
    get lado() {
        return this.#lado;
    }

    calcularArea() {
        return this.#lado * this.#lado;
    }

    calcularPerimetro() {
        return 4 * this.#lado;
    }
}

let cuad = new Cuadrado("white", 10);
console.log(cuad.calcularArea());
cuad.calcularPerimetro();

// class Rectangulo extends Figura {
//     #base;
//     #altura;
//     constructor(color, base, altura) {
//         super(color);
//         this.#base = base;
//         this.#altura = altura;
//     }

//     set base(base) {
//         this.#base = base;
//     }
//     get base() {
//         return this.#base;
//     }
//     set altura(altura) {
//         this.#altura = altura;
//     }
//     get altura() {
//         return this.#altura;
//     }

//     calcularArea() {
//         return this.#base * this.#altura;
//     }

//     calcularPerimetro() {
//         return 2 * (this.#base + this.#altura);
//     }
// }

// class Circulo extends Figura {
//     #radio;
//     constructor(color, radio) {
//         super(color);
//         this.#radio = radio;
//     }

//     set radio(radio) {
//         this.#radio = radio;
//     }
//     get radio() {
//         return this.#radio;
//     }

//     calcularArea() {
//         return Math.PI * this.#radio * this.#radio;
//     }

//     calcularPerimetro() {
//         return 2 * Math.PI * this.#radio;
//     }
// }

// class Canva {
//     #background;
//     #alto;
//     #ancho;
//     #figuras;
//     constructor() {
//         this.#background="white";
//         this.#alto = 800;
//         this.#ancho = 600;
//         this.#figuras = [];
//     }

//     get figuras() {
//         return this.#figuras;
//     }

//     agregarFigura(figura) {
//         this.#figuras.push(figura);
//     }
// }

// let c1 = new Canva();
// console.log("Figuras: ", c1.figuras);

// let cuad1 = new Cuadrado("yellow", 3);
// c1.agregarFigura(cuad1);
// console.log("Figuras: ", c1.figuras);
// console.log("Area cuadrado", c1.figuras[0].calcularArea())

// let cir1 = new Circulo("red", 10);
// c1.agregarFigura(cir1);
// console.log("cir1", Circulo.name);

// for(let fig  of c1.figuras) {
//     console.log("Area de ", fig, "es", fig.calcularArea());
// }
// console.log("Figuras hechas: ", Figura.cantidad);
// console.log("color cuadradro", c1.figuras[0].color)

