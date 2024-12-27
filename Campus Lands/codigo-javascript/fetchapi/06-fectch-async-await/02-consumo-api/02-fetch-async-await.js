const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (res.ok) {
    const data = await res.json();
    console.log("\nDatos de la respuesta: ");
    console.table(data);
  }
};

fetchData();
