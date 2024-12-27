// Función para ejecutar el Código 1 (Uso de condicionales por desigualdad)
function benchmarkCondicionalesDesigualdad(duracion) {
  let texto = "Campus Lands";
  let iteraciones = 0;
  let startTime = Date.now();
  let endTime = startTime + duracion;

  while (Date.now() < endTime) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (
        char !== "a" &&
        char !== "e" &&
        char !== "i" &&
        char !== "o" &&
        char !== "u"
      ) {
        resultado += texto[i];
      }
    }
    iteraciones++;
  }

  return iteraciones;
}

// Función para ejecutar el Código 2 (Uso de includes)
function benchmarkIncludes(duracion) {
  let str = "Campus Lands";
  let vocales = "aeiou";
  let iteraciones = 0;
  let startTime = Date.now();
  let endTime = startTime + duracion;

  while (Date.now() < endTime) {
    for (let i = 0; i < str.length; i++) {
      let letra = str[i].toLocaleLowerCase();
      if (vocales.includes(letra)) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
    iteraciones++;
  }

  return iteraciones;
}

// Función para ejecutar el Código 3 (Uso de un objeto para las vocales)
function benchmarkObjeto(duracion) {
  let str = "Campus Lands";
  let objVocales = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  let iteraciones = 0;
  let startTime = Date.now();
  let endTime = startTime + duracion;

  while (Date.now() < endTime) {
    for (let letra of str) {
      if (objVocales[letra]) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
    iteraciones++;
  }

  return iteraciones;
}

// Función para ejecutar el Código 4 (Uso de condicionales por igualdad)
function benchmarkCondicionalesIgualdad(duracion) {
  let texto = "Campus Lands";
  let iteraciones = 0;
  let startTime = Date.now();
  let endTime = startTime + duracion;

  while (Date.now() < endTime) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        continue;
      }
      resultado += texto[i];
    }
    iteraciones++;
  }

  return iteraciones;
}

// Duración del benchmark en milisegundos (120 segundos)
const DURACION = 120 * 1000;

// Ejecutar el benchmark para el Código 1
let iteracionesCondicionalesDesigualdad = benchmarkCondicionalesDesigualdad(DURACION);
console.log("Iteraciones del Código 1 (condicionales por desigualdad) en 120 segundos: " + iteracionesCondicionalesDesigualdad);

// Ejecutar el benchmark para el Código 2
let iteracionesIncludes = benchmarkIncludes(DURACION);
console.log("Iteraciones del Código 2 (includes) en 120 segundos: " + iteracionesIncludes);

// Ejecutar el benchmark para el Código 3
let iteracionesObjeto = benchmarkObjeto(DURACION);
console.log("Iteraciones del Código 3 (objeto) en 120 segundos: " + iteracionesObjeto);

// Ejecutar el benchmark para el Código 4
let iteracionesCondicionalesIgualdad = benchmarkCondicionalesIgualdad(DURACION);
console.log("Iteraciones del Código 4 (condicionales por igualdad) en 120 segundos: " + iteracionesCondicionalesIgualdad);