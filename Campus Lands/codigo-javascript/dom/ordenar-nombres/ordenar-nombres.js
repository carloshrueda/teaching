let vecnames = new Array();

function sortNames() {
    let txtnombre = document.elformulario.nombre.value;

    if (null === txtnombre || txtnombre.length === 0) return [];

    vecnames.push(txtnombre);
    vecnames.sort();

    document.elformulario.ordenados.value = vecnames.join("\n");
}

function sortNamesSinLet() {
    let txtnombre = document.elformulario.nombre.value;

    if (null === txtnombre || txtnombre.length === 0) return [];

    let txtarea = document.elformulario.ordenados.value;
    let vnames = []
    if (txtarea !== undefined && txtarea !== null &&
        txtarea.length > 0) {
            vnames= txtarea.trim().split("\n")
    }
        

    vnames.push(txtnombre);
    vnames.sort();

    document.elformulario.ordenados.value = vnames.join("\n");
    document.elformulario.nombre.value = "";
}

function dandomoral() {
    alert("voy bien");
}

function cleanTxtArea() {
    document.elformulario.ordenados.value = "";
}
