// Averiguar si una cadena es palindorme.
// Debe usar ciclos. NO USAR FUNCIONES DE CADENA

// FUNCIONES DECLARATIVAS O NOMBRAS
function esPalidrome(cad) {
  let lcad = cad.length - 1;
  for (let i = 0; i <= lcad / 2; i++) {
    // Manera hecha en clase
    // Se compara la primera letra con la última, la segunda con la penúltima, etc
    let lini = cad[i];
    let lfin = cad[lcad - i];

    if (lini !== lfin) {
      return false;
    }
  }

  return true;
}

// FUNCION EXPRESIVA O ANONIMA
const funcAnonima = function (cad) {
  let lcad = cad.length - 1;
  for (let i = 0; i <= lcad / 2; i++) {
    // Manera hecha en clase
    // Se compara la primera letra con la última, la segunda con la penúltima, etc
    let lini = cad[i];
    let lfin = cad[lcad - i];

    if (lini !== lfin) {
      return false;
    }
  }

  return true;
};

// FUNCIONES FLECHA
const funcFlecha = (cad) => {
  let lcad = cad.length - 1;
  for (let i = 0; i <= lcad / 2; i++) {
    // Manera hecha en clase
    // Se compara la primera letra con la última, la segunda con la penúltima, etc
    let lini = cad[i];
    let lfin = cad[lcad - i];

    if (lini !== lfin) {
      return false;
    }
  }

  return true;
};

const msgEsPalindrome = cad =>
  funcFlecha(cad) ? "Es palindrome." : "No es palindrome.";

let cad = "anilina"; //par
// let cad = "reconocer" //impar
console.log(esPalidrome(cad) ? "Es palindrome." : "No es palindrome.");

console.log(funcAnonima("reconocera") ? "Es palindrome." : "No es palindrome.");

console.log(msgEsPalindrome("reconocer"));



