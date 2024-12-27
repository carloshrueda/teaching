function mostrarMensaje() {
    console.log("Se ha dado un clic en el Titulo")
}

const titulo = document.querySelector("h1");
const parrafo = document.querySelector("p");

// titulo.onclick = mostrarMensaje;

titulo.addEventListener("click",mostrarMensaje);

let cont = 0;
parrafo.addEventListener("mouseover", ()  => {
    parrafo.textContent="haz pasado " + (++cont)  + " veces";
})

parrafo.addEventListener("mouseout", () => {
    parrafo.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga, ad cum fugit laboriosam harum quam similique sapiente eligendi qui tempore unde quidem. Minima accusantium ducimus vitae, eaque facilis qui."
});