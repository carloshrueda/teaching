// 1. Promesas

// function getNombre(nomusu) {
//     const url = `https://api.github.com/users/${nomusu}`;

//     // Fecth es una promesa
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(json => {
//             console.log(json.name);
//         })
//         .catch((err) => { console.error("No existe. " + err.message)})
// }

// getNombre("carloshrueda");

// 2. ASYNC - AWAIT
// async function getNombre(nomusu) {
//     const url = `https://api.github.com/users/${nomusu}`;

//     const respuesta = await fetch(url);
//     const json = await respuesta.json();

//     console.log(json);
// }

// getNombre("carloshrueda");


// async function getNombre(nompoke) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

//     const respuesta = await fetch(url);
//     const json = await respuesta.json();

//     console.log(json.sprites.front_default);
// }

// getNombre("ditto");


// 2.1. ASYNC - AWAIT haciendo un return
// async function getNombre(nomusu) {
//     const url = `https://api.github.com/users/${nomusu}`;

//     const respuesta = await fetch(url);

//     // si la respuesta no fue exitosa
//     if (respuesta.status !== 200) 
//         throw new Error("Error. No existe el nombre de usuario en GitHub")

//     const json = await respuesta.json();

//     // retornar el nombre de usuario
//     return json.name;
// }

// // getNombre es una promesa
// getNombre("carloshrueda")
//     .then(nombre => console.log(nombre))
//     .catch(error => console.error(error.message));

// // lLamado a getNombre con un usuario que no existe
// getNombre('noexistoenlabasededatos')
//     .then(nombre => console.log(nombre))
//     .catch(error => console.error(error.message));


// 2.2. ASYNC - AWAIT codigo sin promesas, solo async - await

// funcion que se ejecuta inmediatamente cuando se cree
/*
(function() {
...
})()
*/

// async function getNombre(nomusu) {
//     const url = `https://api.github.com/users/${nomusu}`;

//     const respuesta = await fetch(url);
//     const json = await respuesta.json();

//     // si la respuesta no fue exitosa
//     if (respuesta.status !== 200) 
//         throw new Error("Error. No existe el nombre de usuario en GitHub")

//     // retornar el nombre de usuario
//     return json.name;
// }

//Funcion que se ejecuta apenas la creo
// (async function() {
//     try {
//         let nombre = await getNombre('carloshrueda');
//         console.log(nombre);

//         nombre = await getNombre('noexistoenlabasededatos');
//         console.log(nombre);
//     } catch (error) {
//         console.error(error.message);
//     }
// })()


//--------------------------- POKE -----------

// async function getNombre(nompoke) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

//     const respuesta = await fetch(url);
//     const json = await respuesta.json();

//     console.log(json.sprites.front_default);
// }

// getNombre("bulbasaur");

// 2.1. ASYNC - AWAIT haciendo un return
async function getNombre(nompoke) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

    const respuesta = await fetch(url);

    // si la respuesta no fue exitosa
    //if (respuesta.ok !== 200) 
    if (!respuesta.ok)
        throw new Error("Error. Pokemon no existe")

    const json = await respuesta.json();

    // retornar el nombre de usuario
    return json.sprites.front_default;
}

// // getNombre es una promesa

(async function() {
    try {
        let urlImg = await getNombre('pikachu');
        console.log(urlImg);

        urlImg = await getNombre('limber');
        console.log(nombre);
    } catch (error) {
        console.error(error.message);
    }
})()
