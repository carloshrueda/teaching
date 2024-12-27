document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const formulario = event.target;
    const datos = new FormData(formulario);
    const nomapell = datos.get("nombre")+ " " + datos.get("apellido")   ;

    miFormulario.nomapell.value= nomapell;
    console.log(formulario.method);
    
    //window.location.href = 'servicios.html'
    //document.formulario.submit();

    
    fetch(formulario.action, {
        method: formulario.method,
        body: datos,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al enviar el formulario: ${response.statusText}`);
        }
        return response.text();
    })
    .then(responseText => {
        console.log(responseText);
        // Puedes redirigir al usuario a otra página si es necesario
        window.location.href = 'servicios.html';
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
});
