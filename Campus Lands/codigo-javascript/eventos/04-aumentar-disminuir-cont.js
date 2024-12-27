const btnAumentar = document.querySelector(".btn-info");
const btnDisminuir = document.querySelector(".btn-danger");
const contador = document.getElementById("contador");

let varContador = 0;

btnAumentar.addEventListener("click", () => {
  //   contador.textContent = 1 + parseInt(contador.textContent);
  contador.textContent = ++varContador;
});

btnDisminuir.addEventListener("click", () => {
  //   contador.textContent = parseInt(contador.textContent) - 1;
  contador.textContent = --varContador;
});



// const container = document.querySelector(".container");
// const contador = document.getElementById("contador");

// let varContador = 0;

// container.addEventListener("click", evento => {
//   if (evento.target.classList.contains("btn-info")) {
//     contador.textContent = ++varContador;
//   } else if (evento.target.classList.contains("btn-danger")) {
//     contador.textContent = --varContador;
//   }

//   // para que el efecto del click no se propague al todo el body
//   evento.stopPropagation();
// });

//document.body.addEventListener("click", () => { console.log("click"); });
