class Cuenta {
    // ESTATICOS
    static cantidad = 0;

    constructor(numero, saldo = 0) {
        this._numero = numero;
        this._saldo = saldo;

        ++Cuenta.cantidad;
    }

    /* SETTER / GETTER */
    set numero(nuevoNumero) {
        this._numero = nuevoNumero;
    }
    get numero() {
        return this.numero;
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

class CuentaAhorro extends Cuenta { }

// let ctAh1 = new CuentaAhorro(789, "Mariana", 50000);
// ctAh1.depositar(1_200_000);
// console.log(ctAh1.consultarSaldo());
// console.log(CuentaAhorro.cantidad);

class CuentaCorriente extends Cuenta {
    static cantidad = 0;
    constructor(numero, nombre, saldo = 0, topeCredito) {
        super(numero, nombre, saldo);

        this._topeCredito = topeCredito;
        if (this._topeCredito === undefined) {
            this._topeCredito = 0;
        }

        ++CuentaCorriente.cantidad;
    }

    // SETTER - GETTER
    set topeCredito(nuevoTope) {
        this._topeCredito = nuevoTope;
    }

    get topeCredito() {
        return this._topeCredito;
    }

    // METODO DE LA CLASE
    girar(monto) {
        let tsaldo = this._saldo;
        tsaldo -= monto;
        if (tsaldo >= -this._topeCredito) {
            this._saldo = tsaldo;
            return true;
        }

        return false;
    }
}

// let ctaC = new CuentaCorriente(753, "Daniela", 2_000_000, 2_000_000);
// ctaC.girar(2_500_000);
// ctaC.depositar(500_000);
// ctaC.girar(7_000_000);
// console.log("Saldo: ", ctaC.consultarSaldo());
// console.log("Cuentas creadas: ", Cuenta.cantidad);
// console.log("Cuentas Corrientes creadas: ", CuentaCorriente.cantidad);


class Persona {
    static cantPersona;

    constructor(tipoPersona, tipoIdentifacion,
                numIdentificacion, nombre,
                telefono, cuenta) {
        this._tipoPersona = tipoPersona;
        this._tipoIdentifacion = tipoIdentifacion
        this._numIdentificacion = numIdentificacion;
        this._nombre = nombre;
        this.telefono = telefono;

        this._cuenta = cuenta;
    }

    set cuenta(cuenta) {
        this._cuenta = cuenta;
    }

    get cuenta() {
        return this._cuenta;
    }
}

let ctaC = new CuentaCorriente(753, 2_000_000, 2_000_000);


let p1 = new Persona("Natural","CC",1234,"Daniela", 123456, ctaC);
p1.cuenta.girar(2_500_000);
p1.cuenta.depositar(500_000);
p1.cuenta.girar(7_000_000);
console.log(p1.cuenta.consultarSaldo(), p1.cuenta._saldo);

