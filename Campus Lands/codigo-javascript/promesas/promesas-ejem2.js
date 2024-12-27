const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Operación completada con éxito!");
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