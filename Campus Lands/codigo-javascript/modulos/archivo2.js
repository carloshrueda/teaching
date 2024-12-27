import nombre, * as vale from './archivo1.js';
import {factorial, PI as PII} from './archivo3.js';
//import * as pablo from './archivo3.js';
import value, {mensaje} from './mensaje.js'


console.log(vale.suma(2, 3)); 
console.log(vale.PI); 
console.log(factorial(5));
//console.log(pablo.factorial(5));
console.log(PII);
//console.log(pablo.PI);
console.log(mensaje());
console.log(vale.sputnik.promedad);
console.log(vale.Camper.mensaje());
// Muestra el nombre por defecto del modulo archivo1.js
console.log(nombre);
console.log(value);
