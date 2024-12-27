console.log("Servios.HTML");
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const nomapell = params.get('nomapell');

    console.log(`Nombre y apellidos: ${nomapell}`);
});
