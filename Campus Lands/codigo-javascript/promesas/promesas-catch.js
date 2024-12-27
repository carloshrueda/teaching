const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("¡Operación completada con éxito!");
        } else {
            reject("¡Hubo un error al cumplir la promesa!");
        }
        
    }, 2000);
});

console.log("Inicio de la promesa");

miPromesa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error("Error: ", error)
    });

    console.log("Tareas adicionales.");