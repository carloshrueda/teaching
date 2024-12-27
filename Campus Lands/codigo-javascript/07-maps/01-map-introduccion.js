const mapa = new Map();

// Agragar una llave - valor al mapa
mapa.set("123", "Warllen");
mapa.set("396", "Ada");
mapa.set("133", "Nicolas");

// HAS () Verificar si una llave existe en el mapa
console.log(mapa.has("Laia"));

// get() obtiene el vaalor del mapa
console.log(mapa.get("123"));
console.log(mapa.get("555"));

// recorrer con for .. of
for(let llave of mapa.keys()) {
    console.log(llave + " : " + mapa.get(llave));
}

for (let [llave, valor] of mapa) {
  console.log(llave + " : " + valor);
}


// recorrido con foreach
mapa.forEach((valor, llave) => console.log(llave + " -> " + valor));


console.log("tamaño: " + mapa.size);
mapa.delete("133");
mapa.clear();
console.log("tamaño: " + mapa.size);
