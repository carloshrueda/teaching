function distaciaLetras(s, distance) {
    let vAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < distance.length; i++) {
        let letra = vAlpha[i];
        let pos1 = s.indexOf(letra);
        if (pos1 < 0)
            continue;
        let pos2 = s.indexOf(letra, pos1 + 1);
        let d = pos2 - pos1 - 1;
        console.log(`${letra} - ${pos1} - ${pos2} - ${d} - ${distance[i] === d}`);
        if (distance[i] !== d)
            return false
    }

    return true;
}

function distaciaLetras2(s, distance) {
    let d, pos, letS;
    const codeA = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        letS = s.charAt(i);
        d = s.indexOf(letS, i + 1) - i - 1;
        if (d >= 0) {
            pos = letS.charCodeAt(0) - codeA;
            if (distance[pos] !== d)
                return false
        }
    }

    return true;
}

var distaciaLetras3 = (s, distance) => {
    let posD, d;
    return s.split("").reduce((acum, letS, posS) => {
        d = s.indexOf(letS, posS + 1) - posS - 1;
        if (d >= 0) {
            posD = letS.charCodeAt(0) - 97;
            if (distance[posD] !== d)
                return acum && false;
            else 
                return acum && true;
        } else 
            return acum && true;
    }, true);
}


let s = "abaccb";
let distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rta = distaciaLetras3(s, distance);
console.log(rta);

console.log("-".repeat(30) + "\n")

s = "aa";
distance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
rta = distaciaLetras3(s, distance);
console.log(rta);

console.log("-".repeat(30) + "\n")

s = "zz";
distance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
rta = distaciaLetras3(s, distance);
console.log(rta);
