function crearMatriz(matriz, fil, col) {
    for (let i = 0; i < fil; i++)
        matriz[i] = new Array(col);

    return matriz;
}

function imprimirMatriz(matriz) {
    for (let f = 0; f < matriz.length; f++) {
        let fila = "";
        for (c = 0; c < matriz[f].length; c++) {
            fila += matriz[f][c] + "\t\t";

        }
        console.log(fila);
        // console.log(matriz[f].join("\t\t"));
    }
}

const llenarMatriz = function (m) {
    for (let f = 0; f < m.length; f++) {
        m[f][0] = prompt(`Id del empleado ${f + 1}`)
        m[f][1] = prompt(`Nombre del empleado ${f + 1}`)
        m[f][2] = Number(prompt(`Salario del empleado ${f + 1}`))
    }
}

function sumaFilas(m) {
    let vsum = [];
    for (let f = 0; f < m.length; f++) {
        // vsum[f] = 0;
        // for(let c=0; c<m[f].length; c++) {
        //     vsum[f] += m[f][c];
        // }
        vsum[f] = m[f].reduce((acumulador, elemento) => {
            return acumulador + elemento;
        });

    }

    return vsum;
}

function sumaColumnas(m) {
    let vcols = m[0].map(() => 0);
    for (let f = 0; f < m.length; f++) {
        for (let c = 0; c < m[f].length; c++) {
            vcols[c] += m[f][c];
        }
    }

    return vcols;
}


function encontrarMayorSalario(matriz) {
    let mayorValor = matriz[0][2]
    let posicion = 0;
    for (let f = 1; f < matriz.length; f++)
        if (matriz[f][2] > mayorValor) {
            mayorValor = matriz[f][2]
            posicion = f;
        }
    
    return [posicion, mayorValor];
}

function encontrarMayorSalario2(matriz) {
    return matriz.reduce((acumulador, element, pos) => { if (element > acumulador) return [pos, acumulador]});
}


let matriz = [];
let filas = Number(prompt("Cantidad de empleados "))
matriz = crearMatriz(matriz, filas, 3);
llenarMatriz(matriz);
let [filaEmpl, salMayor] = encontrarMayorSalario(matriz);
console.log("El id con el salario más alto es: ", matriz[filaEmpl][0])
console.log("El Empleado con el salario más alto es: ", matriz[filaEmpl][1])
console.log("El Salario más alto es: ", salMayor)

// Version con Reduce
console.log("\n\nVersion con REDUCE")
let [filaEmpl2, salMayor2] = encontrarMayorSalario2(matriz);
console.log("El id con el salario más alto es: ", matriz[filaEmpl2][0])
console.log("El Empleado con el salario más alto es: ", matriz[filaEmpl2][1])
console.log("El Salario más alto es: ", salMayor2)