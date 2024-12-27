function myDisplayer(some) {
    console.log(some);
}

function esPrimo(num) {
    console.log(`${num} es un número Primo.`);
}

function esPar(num) {
    return num % 2 == 0;
}

// Simulemos que se consulta la pagina de antecedentes de la 
// Policia. Esta requiere el num de identificación y nos devuelve
// si la persona con ese número tiene antecedente o no
const consultarPolicia = callback => {
    setTimeout(() => {
        const segDesde1970 = Math.floor(Date.now() / 1000);
        if (!callback(segDesde1970)) {
          console.log(segDesde1970 + " No tiene antecedentes");
        } else {
          console.log(segDesde1970 + " Tiene antecentes");
        }
    }, 2000);
}

function myCalculator(num1, num2, funcCallback) {
    let sum = num1 + num2;
    funcCallback(sum);
}

console.log("INICIO");
myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, esPrimo);

consultarPolicia(myDisplayer);
consultarPolicia(esPrimo);

console.log("=".repeat(20));

let tiempo = 3;
let i=1;
for(; i <= 7; i++) {
    setTimeout(() => {
        consultarPolicia(esPar)
    }, 1000 * tiempo);
    tiempo += Math.floor(Math.random() * 10 + 2);
}
console.log("FIN\n");

