from datetime import datetime

def leerFecha(msg):
    while True:
        try: 
            # "%d/%m/%Y" es dd/mm/yyyy
            fecha = datetime.strptime(input(msg), "%d/%m/%Y")
            ano, mes, dia = str(a).split()[0].split("-")
            return f"{dia}/{mes}/{ano}"
        except ValueError:
            print("Error. formato de fecha inválido.\n")

def leerFloat(msg):
    while True:
        try:
            num = float(input(msg))
            return num
        except ValueError:
            print("Error. Ingrese un número decimal válido.\n")

def leerEnteroPositivo(msg):
    while True:
        try: 
            num = int(input(msg))
            if num < 0:
                print("Error. Ingrese un número positivo.\n") 
                continue  
            return num
        except ValueError:
            print("Error. Ingrese un número entero válido.\n")

def leerEntero(msg):
    while True:
        try: 
            num = int(input(msg))
            break
        except ValueError:
            print("Error. Ingrese un número entero válido.\n")

    return num


# edad = leerEnteroPositivo("Ingrese la edad: ")
# print(edad, type(edad))

# temp = leerFloat("Ingrese la temperatura: ")
# print(temp, type(temp))

fecnac = leerFecha("Ingrese la fecha de nacimiento: ")
print(fecnac, type(fecnac))