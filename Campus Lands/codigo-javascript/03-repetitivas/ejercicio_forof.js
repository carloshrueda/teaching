let str = "Campus Lands";

// Recorrer la cadena con For
for(let i=0; i < str.length; i++) {
    let letra = str[i];
    
    if (letra === 'a') break;
    console.log(letra);
}

str = "Campus Lands";
let vocales = "aeiou";

for (let i = 0; i < str.length; i++) {
  let letra = str[i].toLocaleLowerCase();

  if (vocales.includes(letra)) continue;
  console.log(letra);
}

// Recorrer la cadena con for .. of
/*for (let letra of str) {
    console.log(letra);
}
*/

// str = "Campus Lands";
// let objVocales = {
//     a : 1,
//     e : 1,
//     i : 1,
//     o : 1,
//     u : 1
// };

// for (let letra of str) {
//     if (objVocales[letra]) continue;
//     console.log(letra);
// }
