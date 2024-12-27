const frmdt = new FormData();
frmdt.append("id", "3");
frmdt.append("nombres", "Jholver");
frmdt.append("especialidad", "Backend C#");
console.log(frmdt);
console.log(JSON.stringify(frmdt) + "\n\n");


async function metodosRest(url, metodo, data) {
    const response = await fetch(url, {
        method: metodo,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'multipart/form-data',
        },
        body: data,
    });
    if (!response.ok) {
        throw new Error(`Error al realizar la solicitud ${metodo} a ${url}. `);
    }
    const datos = await response.json();
    return datos;
}

async function ejecutar(data) {
    try {
        const rta = await metodosRest("http://localhost:3000/trainers", "POST", data);
        console.log(rta);
    } catch (error) {
        console.trace("** ERROR **\n" + error);
    }
}

ejecutar(frmdt);