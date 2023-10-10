def msgError(msg):
    print(msg)
    input("Presione cualquier tecla para continuar ...")
    
def findEmpl(lstEmpl, id):
    for i in range(len(lstEmpl)):
        if id == lstEmpl[i][0]:
            return i
        
    return None

def buscarEmpleado(lstEmpl):
    print("\n\n*** 3. Buscar empleado - ACME ***\n")
    
    id = leerId("Id del empleado: ")
    pos = findEmpl(lstEmpl, id)
    if pos != None:
        print("\nNombre:", lstEmpl[pos][1])
        print("Horas trabajadas:", lstEmpl[pos][2])
        print(f"Valor Hora: ${lstEmpl[pos][3]:,.0f}")
    else:
        print("\nEl empleado no ha sido ingresado")
        
    input("Presione cualquier tecla para continuar ...")


def modificarEmpleado(lstEmpl):
    pass

def leerValHora(msg):
    while True:
        try:
            n = int(input(msg))
            if n < 1:
                msgError("Error. Valor de las horas mayor que 0")
                continue
            return n
        except ValueError:
            msgError("Error. Valor de las Horas inválidas")
            continue

def leerHoras(msg):
    while True:
        try:
            n = int(input(msg))
            if n < 1:
                msgError("Error. Horas mayor que 0")
                continue
            return n
        except ValueError:
            msgError("Error. Horas inválidas")
            continue
        
def leerNom(msg):
    while True:
        try:
            n = input(msg)
            if n == None or n.strip() == "":
                print("Error Nombre inválido.")
                continue
            return n
        except Exception as e:
            print("Ha sucedido un Error: ", e)
            continue
        
def leerId(msg):
    while True:
        try:
            n = int(input(msg))
            if n < 1:
                msgError("Error. Id mayor que 0")
                continue
            return n
        except ValueError:
            msgError("Error. Id inválido")
            continue

def agregarEmpleado(lstEmpl):
    print("\n\n*** 1. Agregar empleado - ACME ***\n")
    
    id = leerId("Id del empleado: ")
    nom = leerNom("Nombre del empleado: ")
    hora = leerHoras("Horas trabajadas: ")
    valh = leerValHora("Valor de la Hora trabajada: ")
    
    datempl = [id, nom, hora, valh]
    lstEmpl.append(datempl) 
    # print(lstEmpl)
    # input()

def menu():
    while True:
        try:
            print("\n\n*** NOMINA ACME ***")
            print("\tMENU")
            print("1- Agregar empleado\n\
2- Modificar empleado\n\
3- Buscar empleado\n\
4- Eliminar empleado\n\
5- Listar empleados\n\
6- Listar nómina de un empleado\n\
7- Listar nómina de todos los empleados\n\
8- Salir\n")
            op = int(input("\t>> Escoja una opción (1-8)?"))
            if op < 1 or op > 8:
                msgError("Error. Opción Inválida (de 1 a 8).")
                continue
            return op
        except ValueError:
            msgError("Error. Opción Inválida (de 1 a 8).")
            continue
        
def main():
    lstEmpl = []
    while True:
        op = menu()
        if op == 1:
            agregarEmpleado(lstEmpl)
        elif op == 2:
            modificarEmpleado(lstEmpl)
        elif op == 3:
            buscarEmpleado(lstEmpl)
        # colocar otras opciones
        elif op == 8:
            print("\n", "Gracias por usar el programa... Adios...".center(80))
            break
    

# Programa Principal
main()