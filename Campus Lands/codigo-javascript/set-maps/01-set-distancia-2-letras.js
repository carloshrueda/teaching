function distaciaLetras_set(s, distance) {
    let d, pos1, pos2, posLet;
    let setCad = new Set(s);
    let codeA = 97;
    // console.log(setCad);
    for (let letra of setCad) {
        // console.log(letra);
        pos1 = s.indexOf(letra);
        pos2 = s.indexOf(letra, pos1 + 1);
        d = pos2 - pos1 - 1;
        if (d >= 0) {
            posLet = letra.charCodeAt(0) - codeA;
            if (distance[posLet] !== d) 
                return false;
        }
    }

    return true;
}

let s = "abaccb";
let distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rta = distaciaLetras_set(s, distance);
console.log(s, rta);