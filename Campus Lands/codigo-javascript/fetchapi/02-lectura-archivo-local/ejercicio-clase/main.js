import cargarTexto from "./cargartexto.js"

const cargartxt = document.getElementById("cargartxt");
const btnCargarTxt = document.getElementById("btntexto");

btnCargarTxt.addEventListener("click", (e) => {
    cargarTexto(cargartxt);

    e.stopPropagation();
})

const btnCargarJSON= document.getElementById("btnjson");
const tblBody = document.getElementById("dattable");

btnCargarJSON.addEventListener("click", e => {
    console.log("btnCargarJSON");
    cargarJSON(tblBody);

    e.stopPropagation();
})

function cargarJSON(elemHTML) {
    console.log("cargarJSON");
    fetch("datos.json")
    .then(response => response.json())
    .then(datos => {
        console.table(datos);
        buildTable(elemHTML, datos);
    })
}

function buildTable(elemHTML, datos) {
    let filas = "";
    for (let valor of datos) {
        filas += `
            <tr>
                <td>${valor.NOMBRE}</td>
                <td>${valor.EQUIPO}</td>
                <td id="tbledad">${valor.EDAD}</td>
                <td id="tblimg">
                    <img src= ${valor.SEXO === "M" ? "hombre.png" : "mujer.png"} 
                    alt="Camper">
                
                </td>
            </tr>
        `
    }
    elemHTML.innerHTML = filas;
}


