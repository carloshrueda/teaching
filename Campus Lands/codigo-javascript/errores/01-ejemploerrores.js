try {
    let i = 1/0;
    //throw "Division por cero"
    let a = "a"/1;
    console.log("Division letra por numero");
} catch (ex) {
    console.log("Excepcion:", ex);

} finally {
    let v = [];
    console.log(v.length)
}