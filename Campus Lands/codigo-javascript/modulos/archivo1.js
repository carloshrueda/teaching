// Exportar una función desde archivo1.js
export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

// Exportar una variable desde archivo1.js
export const PI = 3.1416;

export const sputnik = {
  nivel:'intermedio',
  capacidad: 35,
  campers: 30,
  promedad: 25
}

export class Camper {
  static mensaje() {
    return 'Listo para el test';
  }
}

const name = "modulo de clases";

export default name;  
