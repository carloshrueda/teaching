const formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(formulario);

    const datForm = new FormData(miform);
    for(let [elem, val] of datForm.entries()) {
        console.log(elem, val)
    }

    event.stopPropagation();
});