// Definir la cantidad de iteraciones
const ITERACIONES =  10_000_000;

// Cadena de 100 caracteres
let texto = "aebicodufgohijukalemenopuqirustuvwxayzabecidofugohijukalemenopuqirustuvwxayzabecidofugohijukalemenopuqirustuvwxayz";

// Función para el algoritmo de condicionales por desigualdad (original)
function condicionalesDesigualdad() {
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (
        char !== "a" &&
        char !== "e" &&
        char !== "i" &&
        char !== "o" &&
        char !== "u"
      ) ;

    }
  }
}

// Función para el algoritmo que usa includes (original)
function includes() {
  let vocales = "aeiou";
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i].toLocaleLowerCase();
      if (vocales.includes(letra)) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

// Función para el algoritmo que usa un objeto para las vocales (original)
function objeto() {
  let objVocales = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  for (let j = 0; j < ITERACIONES; j++) {
    for (let letra of texto) {
      if (objVocales[letra]) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

// Función para el algoritmo de condicionales por igualdad (original)
function condicionalesIgualdad() {
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) 
        continue;
    }
  }
}

// Función para el algoritmo de condicionales por desigualdad (optimizado)
function condicionalesDesigualdadOptimizado() {
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (
        char !== "e" &&
        char !== "a" &&
        char !== "o" &&
        char !== "i" &&
        char !== "u"
      ) ;
    }
  }
}

// Función para el algoritmo que usa includes (optimizado)
function includesOptimizado() {
  let vocales = "eaoiu";
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i].toLocaleLowerCase();
      if (vocales.includes(letra)) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

// Función para el algoritmo que usa un objeto para las vocales (optimizado)
function objetoOptimizado() {
  let objVocales = {
    e: 1,
    a: 1,
    o: 1,
    i: 1,
    u: 1,
  };
  for (let j = 0; j < ITERACIONES; j++) {
    for (let letra of texto) {
      if (objVocales[letra]) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

// Función para el algoritmo de condicionales por igualdad (optimizado)
function condicionalesIgualdadOptimizado() {
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (
        char === "e" ||
        char === "a" ||
        char === "o" ||
        char === "i" ||
        char === "u"
      ) 
        continue;
    }
  }
}

// Algoritmo adicional: Uso de Set para las vocals
function setVocales() {
  let vocales = new Set(['a', 'e', 'o', 'i', 'u']);
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (vocales.has(char)) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

function setVocalesOptimizado() {
  let vocales = new Set(['e', 'a', 'o', 'i', 'u']);
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i].toLowerCase();
      if (vocales.has(char)) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

// Función que usa search()
function searchVocales() {
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      if (texto[i].toLowerCase().search(/[eaoiu]/) !== -1) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

// Función que usa match()
function matchVocales() {
  for (let j = 0; j < ITERACIONES; j++) {
    for (let i = 0; i < texto.length; i++) {
      if (texto[i].toLowerCase().match(/[eaoiu]/)) continue;
      // Aquí no concatenamos el resultado para mantener la comparación justa
    }
  }
}

// Función que usa programación funcional (filter)
function filterVocales() {
  for (let j = 0; j < ITERACIONES; j++) {
    texto.split('').filter(char => !'eaoiu'.includes(char.toLowerCase()));
  }
}

// Algoritmos a comparar
const algoritmos = {
  /*condicionalesDesigualdad,
  condicionalesIgualdad,
  includes,
  objeto,
  condicionalesDesigualdadOptimizado,
  includesOptimizado,
  objetoOptimizado,
  condicionalesIgualdadOptimizado,*/
  setVocales,
  setVocalesOptimizado,
  /*searchVocales,
  matchVocales,
  filterVocales,*/
};

// Función para ejecutar el benchmark
function ejecutarBenchmark(algoritmos) {
  let resultados = [];

  for (let nombre in algoritmos) {
    let startTime = Date.now();
    algoritmos[nombre]();
    let endTime = Date.now();
    let tiempo = endTime - startTime;
    console.log(
      `Tiempo de ejecución del algoritmo ${nombre}: ${tiempo.toLocaleString()} ms`
    );
    resultados.push({ nombre, tiempo });
  }

  // Ordenar los resultados por tiempo de ejecución
  resultados.sort((a, b) => a.tiempo - b.tiempo);

  // Mostrar el informe ordenado
  console.log("\nInforme de tiempos de ejecución (de menor a mayor):");
  resultados.forEach(resultado => {
    console.log(
      `Algoritmo ${resultado.nombre}: ${resultado.tiempo.toLocaleString()} ms`
    );
  });
}

// Ejecutar el benchmark
ejecutarBenchmark(algoritmos);
