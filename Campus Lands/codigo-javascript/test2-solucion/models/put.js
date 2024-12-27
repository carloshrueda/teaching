export function put(url, datos) {
  //Busque si existe el dato en la base de datos
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data !== undefined) {
  //         // Existe el registro, entonces modifica en la base datos
  //         fetch(url, {
  //             method: 'PUT',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify(datos)
  //         })
  //         .then(response => response.json())
  //         .then(data => {
  //             console.log(data);
  //         })
  //       } else {
  //         alert("El registro no existe en la BD para poder modificar");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      
    });
}
