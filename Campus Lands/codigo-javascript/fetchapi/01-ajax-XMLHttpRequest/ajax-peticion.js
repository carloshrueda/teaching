// funcion para cuando la llamada es exitosa
function exito() {
  var datos = JSON.parse(this.responseText); //convertir a JSON
  console.log(datos);
}

// funcion para la llamada fallida
function error(err) {
  console.log("Solicitud fallida", err); //los detalles en el objecto "err"
}

var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
xhr.onload = exito; // llamar a la funcion exito si exitosa
xhr.onerror = error; // llamar a la funcion error si fallida
xhr.open("GET", "https://api.github.com/users/manishmshiva"); // Abrir solicitud GET
xhr.send(); // mandar la solicitud al vervidor.
