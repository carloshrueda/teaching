// const CuentaCorrienteA = {
//     numero:1234,
//     nombre:"Juan",
//     saldo:350_000,
//     depositar(monto) {
//         this.saldo += monto;

//         return true;
//     },
//     girar(monto) {
//         if (this.saldo >= monto)
//             this.saldo -= monto;
//         else
//             return false;

//         return true;
//     },
//     consultarSaldo() {
//         return this.saldo;
//     }
// }

// console.log(CuentaCorrienteA.consultarSaldo());
// CuentaCorrienteA.depositar(350_000);
// CuentaCorrienteA.girar(200_000);
// console.log(CuentaCorrienteA.consultarSaldo());

// const CuentaCorrienteB = {
//     numero:9876,
//     nombre:"Maria",
//     saldo:450600,
//     depositar(monto) {
//         this.saldo += monto;

//         return true;
//     },
//     girar(monto) {
//         if (this.saldo >= monto)
//             this.saldo -= monto;
//         else
//             return false;

//         return true;
//     },
//     consultarSaldo() {
//         return this.saldo;
//     }
// }

// console.log(CuentaCorrienteA.consultarSaldo());
// CuentaCorrienteA.depositar(3_050_000);
// CuentaCorrienteA.girar(0);
// console.log(CuentaCorrienteA.consultarSaldo());

// CON CLASES
class CuentaCorriente {
  constructor(numero, nombre, saldo=0) {
    this.numero = numero;
    this.nombre = nombre;
    this.saldo = saldo;
  }
  depositar(monto) {
    this.saldo += monto;

    return true;
  }
  girar(monto) {
    if (this.saldo >= monto) this.saldo -= monto;
    else return false;

    return true;
  }
  consultarSaldo() {
    return this.saldo;
  }
}

const ctaCorrA = new CuentaCorriente(1234, "Juan");
const ctaCorrB = new CuentaCorriente(9876, "Maria", 450600);

console.log(ctaCorrA.consultarSaldo());
ctaCorrA.depositar(350_000);
ctaCorrA.girar(200_000);
console.log(ctaCorrA.consultarSaldo());

console.log("-".repeat(30));

console.log(ctaCorrB.consultarSaldo());
ctaCorrB.depositar(3_050_000);
ctaCorrB.girar(0);
console.log(ctaCorrB.consultarSaldo());

console.log("Saldo cta B: ", ctaCorrB.saldo);
ctaCorrB.fechaCreacion = new Date("2000/01/01");


