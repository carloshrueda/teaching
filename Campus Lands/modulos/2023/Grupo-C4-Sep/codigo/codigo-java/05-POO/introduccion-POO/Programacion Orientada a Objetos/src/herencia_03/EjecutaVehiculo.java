package herencia_03;

public class EjecutaVehiculo {
    public static void main(String[] args) {
        Automovil v1 = new Automovil("Volvo 550",
                                        120.4,
                                        4,
                                    5,
                                        4);
        v1.mostrarDatos();
        v1.pruebaDelMotor();
        System.out.println("=".repeat(20));

        Motocicleta v2 = new Motocicleta("Italika", 120.2,
                2, 2);
        v2.mostrarDatos();
        v2.pruebaDelMotor();
        System.out.println("=".repeat(20));

        Autobus v3 = new Autobus("Mercedez", 300.8,
                2, 42, 2, 2);
        v2.mostrarDatos();
        v2.pruebaDelMotor();
        System.out.println("=".repeat(20));

        Vehiculo v4 = new Automovil("Volvo 650",
                120.4,
                4,
                5,
                4);

        v4.pruebaDelMotor();

        Vehiculo[] v = {v1, v2, v3, v4};
        for(Vehiculo vi : v) {
            vi.pruebaDelMotor();
        }

    }
}
