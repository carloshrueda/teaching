// Opciones
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    const opciones = {
      status: res.status,
      statusText: res.statusText,
      ok: res.ok,
      url: res.url,
      type: res.type,
      headers: res.headers,
    };
    console.table(opciones);

    if (res.ok) {
      console.log(opciones.status);
      return res.json();
    }
  })
  .then((d) => {
    console.log("\nDatos de la respuesta: ")
    console.table(d);
  });
