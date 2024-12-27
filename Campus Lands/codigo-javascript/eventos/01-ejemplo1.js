function mostrarMensaje(e) {
    console.log("mostrar mensaje", e.type, "\n", e.view);

    const parrafo = document.querySelector("p");
    if (e.type === "fullscreenchange") {
        parrafo.textContent = "Full Screen"
      } else {
        parrafo.textContent = "No Screen"
      }
}

const titulo = document.querySelector("h1");


// titulo.onclick = mostrarMensaje;

titulo.addEventListener("click", mostrarMensaje);


// titulo.removeEventListener("click", mostrarMensaje);