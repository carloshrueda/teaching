const fcounts = {
    countFor: function countFor(string, caracter) {
        // Inicializar el contador a cero
        let contador = 0;
        // Recorrer el string carácter por carácter usando un bucle for
        for (let i = 0; i < string.length; i++) {
            // Si el carácter en la posición i es igual al carácter a buscar
            if (string[i] === caracter) {
                // Incrementar el contador en uno
                contador++;
            }
        }
        return contador;
    },
    countForLet: function countForLet(string, caracter) {
        // Inicializar el contador a cero
        let contador = 0;
        let c = "";
        // Recorrer el string carácter por carácter usando un bucle for
        for (c of string) {
            // Si el carácter en la posición i es igual al carácter a buscar
            if (c === caracter) {
                // Incrementar el contador en uno
                contador++;
            }
        }
        return contador;
    },
    countForCharAt: function countForCharAt(string, caracter) {
        /// Inicializar el contador a cero
        let contador = 0;
        // Recorrer el string carácter por carácter usando un bucle for
        for (let i = 0; i < string.length; i++) {
            // Si el carácter en la posición i es igual al carácter a buscar
            if (string.charAt(i) === caracter) {
                // Incrementar el contador en uno
                contador++;
            }
        }
        return contador;
    },
    countSplit: function countSplit(string, caracter) {
        // Dividir el string en un arreglo usando el carácter como separador
        // Restar uno a la longitud del arreglo y devolver el resultado
        return string.split(caracter).length - 1;
    },
    countMatch: function countMatch(string, caracter) {
        // Crear una expresión regular que busque el carácter en el string
        // Buscar las coincidencias usando el método match()
        // Obtener la longitud del arreglo de coincidencias o cero si es null
        return (string.match(new RegExp(caracter, "g")) || []).length;
    },
};

const string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem eu elit sagittis ullamcorper. Fusce vitae nisl quis leo tincidunt lacinia. Suspendisse potenti. Morbi quis nisl id augue tincidunt consequat. Mauris quis lacus vitae justo malesuada aliquet. Donec quis nisl quis leo tincidunt lacinia. Suspendisse potenti. Morbi quis nisl id augue tincidunt consequat. Mauris quis lacus vitae justo malesuada aliquet.";
const letter = "m";
const max = 10_000_000;
let res = -1;

for (key in fcounts) {
    const fun = fcounts[key];

    const inicio = performance.now();
    for (let i = 0; i <= max; i++) fun(string, letter);
    const fin = performance.now();

    console.log(`${key}: ${fin - inicio} ms [${res}]`);
}
