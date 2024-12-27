function distaciaLetras_set(s, distance) {
    let d, posLet, letra;
    const mapLetras = new Map();
    const codeA = 97;
    // console.log(setCad);
    for (let i=0; i < s.length; ++i) {
        letra = s.charAt(i);
        if (mapLetras.has(letra)) {
            d = i - mapLetras.get(letra, i) - 1;
            posLet = letra.charCodeAt(0) - codeA;
            if (distance[posLet] !== d) 
                return false;
        }
        else {
            mapLetras.set(letra, i);
            // console.log(mapLetras);
        }
    }

    return true;
}

let s = "abaccb";
let distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rta = distaciaLetras_set(s, distance);
console.log(s, rta);