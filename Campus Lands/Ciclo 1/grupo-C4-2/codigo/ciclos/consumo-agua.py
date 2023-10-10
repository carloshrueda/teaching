n = int(input("Cantidad de usuarios: "))

for usu in range(1, n+1):
    print("\nInformación del usuario #", usu)
    cod = int(input("\tCodigo: "))
    nom = input("\tNombre: ")
    est = input("\tEstado (V: Vigente o S:Suspendido): ")
    estr = int(input("\tEstrato (1 a 6): "))
    con = float(input("\tConsumo cm3: "))
    
    if est == "V" or est == "v":
        if estr == 1:
            tb = 10_000
        elif estr == 2:
            tb = 20_000
        elif estr == 3:
            tb = 30_000
        elif estr == 4:
            tb = 45_000
        elif estr == 5:
            tb = 60_000
        elif estr == 6:
            tb = 70_000
            
        valcon = 200 * con
        valser = tb + valcon
        
        print("\n\t", "-" * 30)
        print("\tNombre:", nom)
        print(f"\tTarifa básica: ${tb:,.0f}")
        print(f"\tValor del consumo del mes es: ${valcon:,.0f}")
        print(f"\tValor a pagar por el servio del mes es: ${valser:,.0f}")
    