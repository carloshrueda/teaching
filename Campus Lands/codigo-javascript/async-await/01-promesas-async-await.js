const datos = [
    {
        id: 1,
        title: "Iron Man",
        year: 2008
    },
    {
        id: 2,
        title: "Spiderman: HomeComing",
        year: 2017
    },
    {
        id: 3,
        title: "Avengers: Endgame",
        year: 2019
    },
];


//1. Sincrono
// const getDatos = () => {
//     return datos;
// }

// console.log(getDatos())


// 2. Callbacks
// const getDatos = () => {
//     setTimeout( () => {
//         return datos;
//     }, 1500)
// }

// console.log(getDatos())


// const datos = [];

// 3. Promesas
// const getDatos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => { //simula una llamada a un sever
//             if (datos.length === 0) {
//                 reject(new Error("Error. No existen datos."))
//             }
//             resolve(datos);
//         }, 1500)
//     })
// }

// console.log("inicio");

// getDatos()
//     .then((datos) => { console.table(datos)})
//     .catch((err) => { console.error(err.message)})



// 4. Async Await
async function obtenerDatos() {
    try {
        const datosObtenidos = await getDatos();
        console.table(datosObtenidos);
    } catch (error) {
        console.error(error.message);
    }
}

obtenerDatos();

console.log("fin");