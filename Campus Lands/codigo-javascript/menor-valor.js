function menorValor() {
    let cantNum = Number(prompt("Ingrese un numero? "));

    let menor= Infinity;
    for(let i=1; i <= cantNum; i++) {
        let num = Number(prompt("Ingrese un numero? "));
        if (num < menor) menor = num;
    }

    return menor;
}

console.log(menorValor());