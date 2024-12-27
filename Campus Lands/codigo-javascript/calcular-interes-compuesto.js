/* Enunciado
* Una persona invierte $1,000.00 en una cuenta de ahorro que produce el 5% de interés. 
Suponiendo que todo el interés se deposita en la cuenta, calcule e imprima el monto de 
dinero en la cuenta al final de cada año, durante 10 años. Use la siguiente fórmula para 
determinar los montos:
*/

/* FUNCIONES */

function buildFila(año, monto) {
  return `<tr>
    <td>${año}</td>
    <td>\$${monto.toFixed(2)}</td>
    </tr>`;
}

const interesCompuesto = (inv, int, anios) => inv * (1 + int) ** anios;

function calcularInteresCompuesto() {
  const interes = 0.05;
  //const inversion = 1000.0;
  const inversion = prompt("Ingrese la inversión a calcular interés");
  const tiempo = 10;

  console.log("Año\t\tMonto en deposito");
  let filas = "";
  for (let i = 1; i <= tiempo; i++) {
    monto = interesCompuesto(inversion, interes, i);
    console.log(`${i} \t\t ${monto.toFixed(2)}`);

    //Construir filas
    filas += buildFila(i, monto);
  }

  document.getElementById("bodyTable").innerHTML = filas;
}

function mensajePrueba() {
    alert("Mensaje de prueba");
}


/* FIN BLOQUES DE FUNCIONES */
