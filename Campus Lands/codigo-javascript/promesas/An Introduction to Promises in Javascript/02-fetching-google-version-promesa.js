const request = require("superagent");

request
  .get("http://www.google.com/")
  .then((res) => {
    // Once we get the response, we print it to the console
    console.log(`Ya se llego respuesta. Valor: ${res.status}\nLongitud: ${res.text.length} Bytes\nEsperamos 3 segundos más ...\n`);
    setTimeout(() => {
        console.log(res.text);
    }, 3000);
  })
  .catch((err) => console.error(err));
