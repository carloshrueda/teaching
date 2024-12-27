class Figura {
    #color;
    static cantidad = 0;
    constructor(color) {
        this.#color = color;

        ++Figura.cantidad;
    }

    get color() {
        return this.#color;
    }

    set color(color) {
        this.#color = color;
    }

    area() {
    }

    dibujar() {
    }
}

// let f1 = new Figura("white");
// f1.color = "amarillo";
// console.log(f1.color)

class Cuadrado extends Figura {
    #lado;
    static cantidad = 0;
    constructor(color, lado) {
        super(color)

        this.#lado = lado;
        ++Cuadrado.cantidad;
    }

    get lado() {
        return this.#lado;
    }
    set lado(lado) {
        this.#lado = lado;
    }

    area() {
        return this.#lado * this.#lado;
    }
    dibujar() {
        console.log("Dibujo Cuadrado");
    }
}

class Rectangulo extends Figura {
    #base;
    #altura
    static cantidad = 0;
    constructor(color, base, altura) {
        super(color)

        this.#base = base;
        this.#altura = altura;
        ++Rectangulo.cantidad;
    }

    get base() {
        return this.#base;
    }
    set base(lado) {
        this.#base = lado;
    }
    get altura() {
        return this.#altura;
    }
    set altura(lado) {
        this.#altura = lado;
    }

    area() {
        return this.#base * this.#altura;
    }
    dibujar() {
        console.log("Dibujo Rectangulo");
    }
}

class Circulo extends Figura {
    #radio;
    static cantidad = 0;
    constructor(color, radio) {
        super(color)

        this.#radio = radio;
        ++Circulo.cantidad;
    }

    get radio() {
        return this.#radio;
    }
    set radio(radio) {
        this.#radio = radio;
    }

    area() {
        return Math.PI * this.#radio * this.#radio;
    }
    dibujar() {
        console.log("Dibujo Circulo");
    }
}

let c1 = new Cuadrado("brown", 5);
let r1 = new Rectangulo("yellow", 3, 2);
let cir1 = new Circulo("pink", 10);
let cir2 = new Circulo("blue", 1);
let cir3 = new Circulo("red", 5);

console.log("Area rectangulo:", r1.area());
cir1.dibujar();
console.log("Cant. Cuadrados", Cuadrado.cantidad);
console.log("Cant. Circulos", Circulo.cantidad);
