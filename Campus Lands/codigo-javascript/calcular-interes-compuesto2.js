const calcularInteres = (p, r, n) => p * ((1 + r) ** n);

const buildFila = (anio, monto) => {
    return `<tr>
        <td>${anio}</td>
        <td>${monto.toFixed(2)}</td>
    </tr>`;
}

function montoDeposito() {
    let p = Number(prompt("Ingrese el valor de la inversión: "));
    let r = 0.05;
    let n = 10;

    let strHTML = "";

    console.log("AÑO \t\t MONTO EN DEPOSITO");
    console.log("-".repeat(20));
    let monto = 0;
    for (let i=1; i <= n; i++) {
        monto = calcularInteres(p, r, i);
        console.log(`${i} \t\t ${monto.toFixed(2)}`);
        strHTML += buildFila(i, monto);
    }

    document.getElementById("respuesta").innerHTML = strHTML;
    //return strHTML;
}

function mensaje(){
    alert("Voy bien"); 
}


