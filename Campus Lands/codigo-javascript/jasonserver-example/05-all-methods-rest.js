async function metodosRest(url, metodo, data) {
    /*const response = await fetch(url);

    fetch(url, {
        metodo,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    let resjson;
    if (response.ok) {
        resjson = await response.json();
        // return resjson;
    } else {

        throw new Error(`Error al realizar la solicitud ${metodo} a ${url}. `);
    }

    return resjson;*/
    // return fetch(url)
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         throw new Error(`Error al realizar la solicitud ${metodo} a ${url}. `);
    //     })
    //     .then(datos => datos)
    const response = await fetch(url, {
        method: metodo, 
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Error al realizar la solicitud ${metodo} a ${url}. `);
    }
    const datos = await response.json();
    return datos;
}

// let rta = "";
// try {
//     const rta = await metodosRest("http://localhost:3000/trainers", "GET") //.then(rta => console.log(rta));
//     console.log(rta);
// } catch (error) {
//     console.trace("** ERROR **\n" + error);
// }

async function ejecutar() {
    try {
        const rta = await metodosRest("http://localhost:3000/trainers", "GET");
        console.log(rta);
    } catch (error) {
        console.trace("** ERROR **\n" + error);
    }
}

ejecutar();
