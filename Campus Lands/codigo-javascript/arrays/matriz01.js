function crearMatriz(matriz, fil, col) {
    for(let i=0; i<fil; i++)
        matriz[i] = new Array(col);

    return matriz;
}

function imprimirMatriz(matriz) {
    for(let f=0; f < matriz.length; f++) {
        let fila = "";
        for(c=0; c < matriz[f].length; c++) {
            fila += matriz[f][c] + "\t\t";
            
        }
        console.log(fila);
        // console.log(matriz[f].join("\t\t"));
    }
}

const llenarMatriz = function(m) {
    for(let f=0; f < m.length; f++) {
        for(let c=0; c < m[f].length; c++) {
            m[f][c] = prompt(`Ingrese el dato para m[${f+1}][${c+1}]`)
        }
    }
}

function sumaFilas(m) {
    let vsum = [];
    for(let f=0; f<m.length; f++) {
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
    let vcols = m[0].map(()=> 0);
    for(let f=0; f<m.length; f++) {
        for(let c=0; c<m[f].length; c++) {
            vcols[c] += m[f][c];
        }
    }

    return vcols;
}



let matriz = [];
let fil= 2, col =3;
// matriz = crearMatriz(matriz, fil, col);
// console.log(matriz);

// let manga= [["papa", "yuca"], ["maiz", "peto", "arracacha"], ["sancocho", "mute"]];
// imprimirMatriz(manga);

// fil = Number(prompt("Ingrese el número de filas"));
// col = Number(prompt("Ingrese el número de columnas"));
// matriz = crearMatriz(matriz, fil, col);
// llenarMatriz(matriz);
// imprimirMatriz(matriz)

matriz = [  [4, 6, 9],
            [7, 2, -1],
            [5, 8, 13],
            [2, 0, 8]]; //4x3

let sumFilas = sumaFilas(matriz);
console.log(sumFilas); 
let sumCols = sumaColumnas(matriz);
console.log(sumCols);

