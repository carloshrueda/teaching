// Opciones
const options = {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
};

fetch("https://jsonplaceholder.typicode.com/todos/20", options)
  .then((res) => res.json())
  .then((d) => {
    console.table(d);
  });
