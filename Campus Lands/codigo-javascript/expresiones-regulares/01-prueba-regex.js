// const myRe = /d(b+)d/g;
// let myArray = myRe.exec('cdbbbbbdbsbz');
// for (let exp of myArray) {
//     console.log(exp);
// }

//escribir una expresion regular que valide que un telefono fijo esta bien escrito
// escrito para Colombia teniendo presente el indicativo pais +57

const myRe = /^(\+57)(60[1-8])(\d{7})$/g;
const myRe2 = /^\+5760[1-8]\d{7}$/g;
let myArray = myRe.exec('+576076363636');
for (let exp of myArray) {
    console.log(exp);
}

