// function operar(arr, operacion, valini = 0) {
//     let resultado = valini;
//     for (let num of arr) {
//         resultado = operacion(resultado, num);
//     }
//     return resultado;
// }

// function suma(a, b) {
//     return a + b;
// }

// function producto(a, b) {
//     return a * b;
// }

// const numeros = [1, 2, 3, 4, 5];
// const sumaTotal = operar(numeros, suma); // Resultado: 15
// console.log(sumaTotal);
// const productoTotal = operar(numeros, producto, 1); // Resultado: 120
// console.log(productoTotal);

// const f1 =  (callback, num) => {
//     // if (num > 0) {
//     //     return f1(callback, --num);
//     // }
//     // else
//     //     return callback;

//     if (num > 0)
//         return f1(callback, num-1) + f2;
//     else 
//         return 1;
// }

// const f2 = (a, b) => {
//     return a + b;
// }

// let result = f1(f2, 5)

// console.log(result);

// function ruidosa(funcion) {
//     return (iter) => {
//     //   console.log("llamando con", argumentos);
//     //   let resultado = funcion(...iter);
//     //   console.log("llamada con", argumentos, ", retorno", resultado);
//     //   return resultado;
//     return funcion(...iter);
//     };
//   }
//   let r = ruidosa(Math.min)([3, 2, 1, 8, 15, -1, 35, 0]);
//   console.log(Math.min(...[3, 2, 1, 8, 15, -1, 35, 0]))


let fecPactada;
let datePactada;
let fecDevolucion;
let dateDevolucion;

//get fecha pactada
do {
  fecPactada = prompt("Fecha Entrega pactada [dd/mm/yyyy]");
  datePactada = new Date(fecPactada);
} while(datePactada !== "Invalid Date");

do {
  fecDevolucion = prompt("Fecha Entrega Real [dd/mm/yyyy]");
  dateDevolucion = new Date(fecDevolucion);
} while(dateDevolucion !== "Invalid Date");

let diff = getTime(datePactada) - getTime(dateDevolucion);
let dias = Math.round(diff/1000/60/60/24);

let multa = 0;
let sancion = false;
if (dias>3) {
  multa += dias * 7000;
  if (dias>4) {
    multa += 10000;
    sancion = true
  }
}

let msg = `La multa es de $${multa}` + (sancion) ? ` y una sanción de 6 meses de no préstamo.` : '';
console.log(msg);
