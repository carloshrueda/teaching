const miDict = new Map([
    ["Daniel", 25],
    ["Maria", 19],
    ["Catalina", 21]
]);

console.log(miDict);
miDict.set("Fabian", 30);
miDict.set("Oscar", 19);


miDict.delete("Fabian");
console.log(miDict);

console.log(miDict.has("Catalina"));
console.log("La edad de maria es:", miDict.get("Maria"));
console.log(miDict.size);

// miDict.forEach(function(v, k) {
//     console.log("llave:", k, " --- valor: ", v);
// });

for (let k of miDict.keys()) {
    console.log("llave:", k, " --- valor: ", miDict.get(k));
}