const prodImpares = function(ini, fin) {
    let prod = 1;
    console.log("NUM \t\t PRODUCTO");
    console.log("-".repeat(40));
    for(let i=ini; i <= fin; i++) {
        //prod *= (i % 2 !== 0) ? i : 1;
        if (i % 2 !== 0) {
            prod *= i;
            console.log(`${i} \t\t\t\t ${prod}`);
        }
            
        
    }

    return prod;
}

console.log(prodImpares(1, 15));