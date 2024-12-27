fetch('http://localhost:3000/trainers', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// (async function () {
//   const response = await fetch('http://localhost:3000/trainers');
//   if (!response.ok)
//     throw new Error(`Error al realizar la solicitud GET`);

//   const data = await response.json();
//   console.log(data);
// }

// )()