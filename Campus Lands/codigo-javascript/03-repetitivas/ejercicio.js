// Averiguar si una cadena es palindorme. 
// Debe usar ciclos. NO USAR FUNCIONES DE CADENA

let cad = "anilina"; //par
// let cad = "reconocer" //impar
let lcad = cad.length - 1;
let espal = true;
for(let i=0; i <= lcad / 2; i++) {
    // Manera hecha en clase
    // Se compara la primera letra con la última, la segunda con la penúltima, etc
    let lini = cad[i];
    let lfin = cad[lcad - i];

    if (lini !== lfin) {
        espal = false;
        break;
    }

    // otra manera:
    // if (cad[i] !== cad[lcad - i]) {
    //     espal = false;
    //     break;
    // }
}

console.log(espal ? "Es palindrome." : "No es palindrome.");