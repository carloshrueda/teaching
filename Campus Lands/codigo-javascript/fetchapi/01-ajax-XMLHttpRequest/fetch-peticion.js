//xhr.open("GET", "https://api.github.com/users/manishmshiva"); 
function obtenerInfo(callback) {
    fetch("https://api.github.com/users/manishmshiva")
    .then(respuesta => { 
        console.log("STATUS: ", respuesta.status)
        return respuesta.json();
    })
    .then(datos => callback(datos))
    .catch(error => console.log("[ERROR]\n",error.message))
    .finally(() => console.log("FIN FETCH"));
}

obtenerInfo(data => {
    console.log("[CON FETCH]")
    for(elem in data) {
        console.log(elem, " : ", data[elem]);
    }
});
