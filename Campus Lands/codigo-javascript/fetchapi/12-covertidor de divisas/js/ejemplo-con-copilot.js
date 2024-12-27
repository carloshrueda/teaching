// funcion que calcule si un número es narcisita 
// el algoritmo de usar el método más eficiente para calcular dicho numerp
// el algoritmo debe ser escrito en javascript
// */

function isNarcissistic(number) {
    if (number < 0) return false;

    // Obtener el número de dígitos sin usar Math.log10()
    let length = 0;
    for (let temp = number; temp >= 1; temp = temp / 10) {
        length++;
    }

    let n = number;
    let sum = 0;
    const powers = {};

    while (n > 0) {
        const digit = n % 10;
        if (powers[digit] === undefined) {
            // Calcular y almacenar potencias solo para los dígitos encontrados
            let power = 1;
            for (let i = 0; i < length; i++) {
                power *= digit;
            }
            powers[digit] = power;
        }
        sum += powers[digit];
        if (sum > number) return false; // Salida temprana si la suma excede al número original
        n = Math.floor(n / 10);
    }

    return sum === number;
}

// Example usage:
console.log(isNarcissistic(153)); // true
console.log(isNarcissistic(123)); // false

