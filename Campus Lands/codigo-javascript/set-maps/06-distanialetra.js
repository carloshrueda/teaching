function distaciaLetras_set(s, distance) {
    let setLetras = new Set(s);
    
    for(let letra of setLetras) {
        let pos1 = s.indexOf(s, letra);
        let pos2 = s.indexOf(s, letra, pos1 + 1);
        let d = pos2 - pos1;
        console.log(d)
        if (d >= 0) {
            posD = letra.charCodeAt(0) - 97;
            if (distance[posD] !== d) {
                return false;
            }

        }
    }

    return true;
}

function distaciaLetras_dic(s, distance) {
    let dicLetras = new Map();
    
    for(let i=0; i < s.length; i++) {
        let letra = s[i];
        if (dicLetras.has(letra)) {
            let d = i - dicLetras.get(letra) - 1;
            if (d >= 0) {
                posD = letra.charCodeAt(0) - 97;
                if (distance[posD] !== d) {
                    return false;
                }
            }

        } else {
            dicLetras.set(letra, i);
        }
    }

    return true;
}

let s = "abaccb";
let distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let rta = distaciaLetras_dic(s, distance);

console.log(rta);