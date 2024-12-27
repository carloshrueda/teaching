class CuentaCorriente {
  // ESTATICOS
  static cantidad = 0;

  constructor(numero, nombre, saldo = 0) {
    this._numero = numero;
    this._nombre = nombre;
    this._saldo = saldo;

    ++CuentaCorriente.cantidad;
  }

  /* SETTER / GETTER */
  set numero(nuevoNumero) {
    this._numero = nuevoNumero;
  }
  get numero() {
    return this._numero;
  }
  set nombre(nuevoNombre) {
    console.log("SET nombre");
    this._nombre = nuevoNombre;
  }
  get nombre() {
    console.log("GET nombre");
    return this._nombre;
  }
  set saldo(nuevoSaldo) {
    this._numero = nuevoSaldo;
  }
  get saldo() {
    console.log("GET saldo");
    return this._saldo;
  }
  /* METODOS */
  depositar(monto) {
    this._saldo += monto;

    return true;
  }
  girar(monto) {
    if (this._saldo >= monto) this.saldo -= monto;
    else return false;

    return true;
  }
  consultarSaldo() {
    return this._saldo;
  }

  static nombreBanco() {
    return "Campus Bank";
  }
}

const ctaCorrA = new CuentaCorriente(1234, "Juan");
const ctaCorrB = new CuentaCorriente(9876, "Maria", 450600);

console.log(CuentaCorriente.cantidad);
console.log(CuentaCorriente.nombreBanco());
