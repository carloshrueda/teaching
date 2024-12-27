function calcAreaTriangulo(base, altura) {
    if (isNaN(base) || isNaN(altura))
        throw new Error("La base o altura no son números válidos");

    if (base<0 || altura<0) 
        throw new Error("La base o altura son negativos");

    let resultado= 0;

    try {
        resultado = base * altura /2;
    } catch (ex) {
        throw "Al hacer la operacion" + ex;
    }

    return altura;
}

try {
    area = calcAreaTriangulo(2, -3);
    console.log("El area es: ", area);
} catch (ex) {
    console.log(ex.message);
    area = 0;
    console.log("El area es: ", area);
}