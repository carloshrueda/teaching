const ahora = new Date();
console.log(ahora);

const horaJeni = new Date(2001, 11, 28, 11, 0, 0);
//horaJeni.toLocaleTimeString();
console.log(horaJeni);

const horaAnder = new Date(1997, 10, 18);
console.log(horaAnder);

const fecha = new Date();
fecha.setFullYear(2024);
fecha.setMonth(11);
fecha.setDate(8);
console.log(fecha);

console.log("Dia Anderson: " + horaAnder.getDay());
console.log("Cadena: " + horaAnder.toDateString());
console.log("Cadena hora actual: " + horaAnder.toTimeString());
console.log("Cadena hora actual corta: " + horaAnder.toLocaleString());
console.log("Millisegundos de Anderson: " + new Date().getTime());

const milliDia = 1000 * 60 * 60 * 24;
console.log(Math.floor((horaJeni.getTime() - horaAnder.getTime()) / milliDia));