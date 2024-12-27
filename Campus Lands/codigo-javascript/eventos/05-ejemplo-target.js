// ---------- SIN EVENT.TARGET ----------

// const btnAumentar = document.querySelector(".btn-info");
// const btnDisminuir = document.querySelector(".btn-danger");
// const txtContador = document.querySelector("#contador");
// let contador = 0;

// btnAumentar.addEventListener('click', () => {
//     txtContador.textContent = ++contador;

// });

// btnDisminuir.addEventListener('click', () => {
//     txtContador.textContent = --contador;
// });

// ---------- CON EVENT.TARGET ----------
const container = document.querySelector(".container");
const txtContador = document.querySelector("#contador");
let contador = 0;

container.addEventListener('click', e => {
    if (e.target.classList.contains('btn-info')) {
        txtContador.textContent = ++contador;

    } else if (e.target.classList.contains('btn-danger')) {
        txtContador.textContent = --contador;
    }

    e.stopPropagation();
});

document.body.addEventListener('click', e => {
    console.log('Se hizo clic en body');
});