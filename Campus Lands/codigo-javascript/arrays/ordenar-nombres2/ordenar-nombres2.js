let vnombres = new Array(); //[]
function ordenar() {

    let nombre = document.miformulario.nombre.value;

    vnombres.push(nombre);
    vnombres.sort();

    document.miformulario.ordenados.value = vnombres.join("\n");

    document.miformulario.nombre.value = "";
}

function ordenar2() {

    let nombre = document.miformulario.nombre.value;

    let vnombres2 = document.miformulario.ordenados.value.split("\n");
    vnombres2.push(nombre);
    vnombres2.sort();

    document.miformulario.ordenados.value = vnombres2.join("\n");

    document.miformulario.nombre.value = "";
}

function flimpiarTxtArea() {
    document.miformulario.ordenados.value = "";
}

