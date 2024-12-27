// //1. FUNCION CON NOMBRES
// // // nombre de la funcion ( [PARAMETROS1, PARAMETROS2, ...])
// // function saludo() {
// //     // cuerpo de la funcion
// //     console.log("Buenos dias campers.");
// // }

// // function saludoPersonalizado(nombre) {
// //     console.log("Buenos días " + nombre);
// // }

// //saludoPersonalizado("Rosvert");

// // Funcion que devuelva el valor de la suma de dos numeros
// // function suma(numero1, numero2) {
// //     let resultado = numero1 + numero2;
// //     return resultado;
// // }

// // let respuestaSuma = suma(2, 3);
// // console.log(respuestaSuma);


// // 2. FUNCIONES ANÓNIMAS
// // let saludoSinNombre = function () {
// //     // cuerpo de la funcion
// //     console.log("Buenos dias campers.");
// // }

// // saludoSinNombre();
// // console.log(saludoSinNombre);

// // let sumaSinNombre = function (num1, num2) {
// //     let resultadoSuma = num1 + num2;
// //     return resultadoSuma;
// // }

// // let suma = sumaSinNombre(2, 3);
// // console.log(suma);

// // 3. FUNCION FLECHA
// const saludoFlecha = () => console.log("Buenos dias campers.");


// saludoFlecha();

// const sumaFlecha = (num1, num2) => {
//     let suma = num1 + num2;
//     return suma;
// }

// let resSumaFlecha = sumaFlecha(2, 3);
// console.log(resSumaFlecha);

// const saludoFlechaPersonalizado = nombre => console.log("Buenos dias " + nombre);

// saludoFlechaPersonalizado("Luis Felipe");

// Escribir una funcion que calcule el Factorial de un numero
// Factorial(5) = 1 x 2 x 3 x 4 x 5

// Funcion con nombre
// function factorial(n) {
//     let f = 1;
//     for(let i=1; i <=n; i++) {
//         f *= i; // f = f * i
//     }
//     return f;
// }
// console.log(factorial(5));

// funcion sin nombre
// const factorialSinNombre = function (n) {
//     let f = 1;
//     for(let i=1; i <=n; i++) {
//         f *= i; // f = f * i
//     }
//     return f;
// }
// console.log(factorialSinNombre(5));

// FUNCION FLECHA
const factorialFlecha = n => {
    let f = 1;
    for(let i=1; i <=n; i++) {
        f *= i; // f = f * i
    }
    return f;
}
console.log(factorialFlecha(5));














