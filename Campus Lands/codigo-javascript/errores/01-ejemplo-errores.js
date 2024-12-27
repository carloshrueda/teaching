function cuadradoNumero(num) {
    if (isNaN(num))
        throw new Error("No es un número la entrada");

    return num * num;
}

try {
    console.log(cuadradoNumero("tres"));
} catch (error) {
    console.log("Ha ocurrido una excepción.\n", error);
}