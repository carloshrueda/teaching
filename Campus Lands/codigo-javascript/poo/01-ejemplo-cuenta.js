// const CuentaCorriente1 = {
//     numero: '123',
//     nombre: 'David Rodriguez',
//     saldo: 1500000,
//     mostrarSaldo() {
//         return `La cuenta ${this.numero} de ${this.nombre} tiene un saldo de ${this.saldo}`;
//     }
// }

// console.log(CuentaCorriente1.mostrarSaldo());

// const CuentaCorriente2 = {
//     numero: '579',
//     nombre: 'Dario Manzanares',
//     saldo: 2300000,
//     mostrarSaldo() {
//         return `La cuenta ${this.numero} de ${this.nombre} tiene un saldo de ${this.saldo}`;
//     }
// }

// console.log(CuentaCorriente2.mostrarSaldo());

class CuentaCorriente {
  constructor(numero, nombre, saldo) {
    this.numero = numero;
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarSaldo() {
    return `La cuenta ${this.numero} de ${this.nombre} tiene un saldo de ${this.saldo}`;
  }
}

const cuenta1 = new CuentaCorriente(579, "David Rodriguez", 1_500_000);
const cuenta2 = new CuentaCorriente(123, "Dario Manzanares", 2_300_000);

console.log(cuenta1.mostrarSaldo());
console.log(cuenta2.mostrarSaldo());
