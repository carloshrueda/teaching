const miconjunto = new Set(["Daniel", "Oscar", "Maria", "Cristina", "Maria"]);

miconjunto.add("Fabian");
miconjunto.add("Oscar");
console.log(miconjunto);

console.log(miconjunto.delete("Fabian"));
console.log(miconjunto.delete("Fabian"));
console.log(miconjunto);

console.log(miconjunto.has("Maria"))
console.log(miconjunto.has("Fabian"))


miconjunto.forEach(function (elem) {
    console.log(elem);
} )

for (let persona of miconjunto.values()) {
    console.log(persona);
}

console.log(miconjunto.size);

miconjunto.clear();
console.log(miconjunto.size);


let vnombres = ["Daniel", "Oscar", "Maria", "Cristina", "Maria"];
//console.log(miconjunto.add(vnombres));

for (let i=0; i < vnombres.length; i++) {
    miconjunto.add(vnombres[i]);
}
console.log(miconjunto);


