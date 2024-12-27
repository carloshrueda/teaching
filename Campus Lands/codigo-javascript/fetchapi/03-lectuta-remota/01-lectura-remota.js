let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

// leer el id 1
fetchRes
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
  });

// leer todos los ids
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((d) => {
    console.table(d);
  });
