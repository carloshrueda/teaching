import { cargarDinamicaSelect, limpiarSelect } from "./utils.js";
import { controlador } from "./../controllers/controlador.js";

const idSelect = "skillId";
const entidadSelect = "skills";
const entidadFormu = "moduloskills";

// Rellenar el select de los elementos de Skill
document.addEventListener("DOMContentLoaded", function (e) {
  try {
    e.target.value = "CARGARSELECT";
    // parametros: evento, id del select, entidad con la que se rellena el select
    cargarDinamicaSelect(e, idSelect, entidadSelect);
  } catch (error) {
    console.error(
      "Ha ocurrido un error al cargar dinamicamente el select.\n",
      e.message
    );
  }

  window.addEventListener("beforeunload", function () {
    // Limpia el select antes de recargar la página
    limpiarSelect(document, idSelect);
  });
});

// Acciones del formulario
const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();

  controlador(formu, e, entidadFormu);

  e.stopPropagation();
});
