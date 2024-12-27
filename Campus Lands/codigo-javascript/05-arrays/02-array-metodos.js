let carros = [];

// Agrega al fina
carros.push("Renault 4", "Fiat", "Volvo", "Ferrari");
// Elimna del final
carros.pop();
// Elmina al inicio
carros.shift();
// Agrega al inicio
carros.unshift("Audi");
console.log(carros);
// Devuelve una porcion
console.log(carros.slice(1, 3));
console.log(carros);

carros.splice(1,2,"Mercedes", "Mazda", "Nissan");
console.log(carros);

console.log("JOIN: " + carros.join("; "));

carros = carros.concat("Toyota", "Mitsubishi", ["Suzuki", "Subaru"]);
carros.concat();
console.log(carros);

console.log(carros.indexOf("Toyota"));
console.log(carros.includes("toyota"));

let rta = carros.reduce((ant, curr) =>  ant += (curr.length <= 5 ? "*" : ""), ant = "");

// ES LO MISMO QUE LA FUNCION reduce()
// ant = ""
// for(let i=0; i<=carros.length; i++) 
//     if (carros[i].length <= 5)
//         ant += carros[i];


console.log(rta)