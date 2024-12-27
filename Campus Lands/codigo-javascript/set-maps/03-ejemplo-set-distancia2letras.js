function distaciaLetras(s, distance) {
    const setCad = new Set(s);
    // console.log(setCad);

    for (const letra of setCad) {
        const pos1 = s.indexOf(letra);
        const pos2 = s.indexOf(letra, pos1 + 1)
        const d = pos2 - pos1 - 1;
        if (d >= 0) {
            const posLet = letra.charCodeAt(0) - 97;
            if(distance[posLet] !== d) 
                return false;
        }
    }

    return true;
}


let s = "abaccb";
let distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rta = distaciaLetras(s, distance);
console.log(s, rta);