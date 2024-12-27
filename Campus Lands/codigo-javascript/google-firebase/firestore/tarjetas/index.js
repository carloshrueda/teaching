import { saveTask } from "./firebase.js"

//Evento cuando la aplicación cargue
window.addEventListener("DOMContentLoaded", () => {

})

const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", e => {
    // No refrescar la página
    e.preventDefault();

    // obtener los datos del formulario
    const title = taskForm["task-title"];
    const description = taskForm["task-description"];

    // Guardar los datos
    saveTask(title.value, description.value);
})