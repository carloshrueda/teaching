console.log("INICIO");

// PROCESO ASINCRONO. DOS 2 SEG DESPUES
setTimeout(() => {
    console.log("Tarea asincrona completada 7 seg despues");
}, 7000);

setTimeout(() => {
  console.log("Tarea asincrona completada 2 seg despues");
}, 2000);

setTimeout(() => {
  console.log("Tarea asincrona completada 4 seg despues");
}, 4000);

console.log("FIN");