const miPromesa = new Promise ( (resolve, reject) => {
    const exito = false;
    if (exito) {
        console.log("Esperando ...");
        setTimeout(() => {
            resolve("Valor que devuelve la promesa");
        }, 5000);
    } else {
        reject("Hubo un error en la operación")
    }
} );

console.log("INICIO");
miPromesa
    .then( res => {
        console.warn("No hubo error en la promesa");
        console.log(res);
    })
    .catch(res => {
        console.error("Error en la promesa");
        console.log(res);
    });
console.log("FIN");