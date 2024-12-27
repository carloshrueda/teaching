// const cLetras = new Set(['a', 'b', 'c', 'd']);
// Crea vacion el conjunto
const cLetras = new Set();
// Agrega elemento al conjunto
cLetras.add('a');
cLetras.add('b');
cLetras.add('c');
cLetras.add('d');
console.log(cLetras);

// Eliminar elementos en un conjunto
cLetras.delete('c');
console.log(cLetras);

// Verificar si un elemento existe o no en el conjunto
console.log(cLetras.has('c') ? "Existe el elemento" : "No Existe el elemento"); //false
console.log(cLetras.has('d')); //true

// Mostrar la cantidad de elemento de un conjunto
console.log(cLetras.size);

// Iterar el conjunto con FOREACH
let str = "";
cLetras.forEach(letra => {
    str += letra + ",";
})
console.log(str);

// Iterar el conjunto con for .. of
console.log(cLetras.values());
str = "";
for(let letra of cLetras) {
    str += letra + ",";
}
console.log(str);






