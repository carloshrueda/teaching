def leerEntero(msg):
    while True:
        try:
            num = int(input(msg))
            if num < 1:
                print("El numero no puede menor 1")
                input("Presione cualquier tecla para continuar ...")
                continue
            break
        except ValueError:
            print("Número inválido.")
            input("Presione cualquier tecla para continuar ...")
            
    return num

def leerNombre(msg):
    while True:
            try:
                nom = input(msg)
                if nom == None or nom.strip() == "":
                    print("No puede ser vacio.")
                    input("Presione cualquier tecla para continuar ...")
                    continue
                break
            except Exception as e:
                print("Nombre inválido.", e)
                input("Presione cualquier tecla para continuar ...")
            
    return nom

def leerEstrato(msg):
    while True:
        try:
            num = int(input(msg))
            if n < 1 or n > 5:
                print("El estrato deber ser de 1 a 5")
                input("Presione cualquier tecla para continuar ...")
                continue
            break
        except ValueError:
            print("Número inválido.")
            input("Presione cualquier tecla para continuar ...")
            
    return num

def tarifabasica(est):
        if est == 1:
            return 10_000
        elif est == 2:
            return 15_000
        elif est == 3:
            return 20_000
        elif est == 4:
            return 25_000
        elif est == 5:
            return 30_000
        
def calcularImpulso(imp):
    return imp * 100

def mostrarValPagar(nom, tbas, valimp):
    print("\nNombre: ", nom)
    print(f"Valor a pagar: ${tbas+valimp:,.0f}")
    print(f"Valor tarifa basica: ${tbas:,.0f}")
    print(f"Valor impulsos: ${valimp:,.0f}")
    

n = leerEntero("Cantidad abonados: ")
valtot = 0
for i in range(1, n+1):
    print("\nAbonado #", i)
    nom = leerNombre("Nombre: ")
    est = leerEstrato("Estrato (1 a 5): ")
    imp = leerEntero("Cantidad Impulso: ")
    tbas = tarifabasica(est)
    valimp = calcularImpulso(imp)
    
    mostrarValPagar(nom, tbas, valimp)
    valtot += tbas + valimp
    
print(f"\nValor total a pagar: ${valtot:,.0f} ")
    