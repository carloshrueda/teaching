console.log("Inicio de la tarea");

// Simular una operación asincrónica que se ejecutará después de 2 segundos
setTimeout(function () {
    console.log("Tarea asincrónica completada después de 2 segundos");
}, 2000);

console.log("Tarea principal continúa");
// Este mensaje se mostrará inmediatamente después del "Inicio de la tarea"