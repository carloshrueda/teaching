import { cargarDinamicaSelect, limpiarSelect } from "./utils.js";
import { controlador } from "./../controllers/controlador.js";

const idSelect1 = "reclutaId";
const idSelect2 = "moduloskillsId";

const entidadSelect1 = "reclutas";
const entidadSelect2 = "moduloskills";

const entidadFormu = "evaluacion";

// Rellenar el select de los elementos de Skill
document.addEventListener("DOMContentLoaded", function (e) {
  
  try {
    e.target.value = "CARGARSELECT";
    // parametros: evento, id del select, entidad con la que se rellena el select
    cargarDinamicaSelect(e, idSelect1, entidadSelect1);

    cargarDinamicaSelect(e, idSelect2, entidadSelect2);
  } catch (error) {
    console.error(
      "Ha ocurrido un error al cargar dinamicamente el select.\n",
      error
    );
  }

  window.addEventListener("beforeunload", function () {
    // Limpia el select antes de recargar la página
    limpiarSelect(document, idSelect1);
    limpiarSelect(document, idSelect2);
  });
});

// Acciones del formulario
const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();

  controlador(formu, e, entidadFormu);

  e.stopPropagation();
});