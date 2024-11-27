from ast import match_case
import os

# contantes
INFORMATIVO = 1
ADVERTENCIA = 2
ERROR = 3

def limpiar_pantalla():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

def titMenu(titulo: str):
    limpiar_pantalla()
    longitud = len(titulo) + 4
    borde = '*' * longitud
    print(f"{borde}\n* {titulo} *\n{borde}")

def imprimir_mensaje(mensaje:str, tipo:int = INFORMATIVO):
    colores = {
        INFORMATIVO: '\033[97m',  # Blanco
        ADVERTENCIA: '\033[93m',  # Amarillo
        ERROR: '\033[91m'         # Rojo
    }
    color = colores.get(tipo, '\033[97m')  # Default to blanco if tipo is not recognized
    reset_color = '\033[0m'

    prefijo = ""
    if tipo == INFORMATIVO:
        prefijo = ""
    elif tipo == ADVERTENCIA:
        prefijo = "--> "
    elif tipo == ERROR:
        prefijo = "***> "
    else:
        prefijo = ""
    
    print(f"{color}{prefijo}{mensaje}{reset_color}")

def mnuInformes():
    limpiar_pantalla()
    titMenu("**> SUBMENU INFORMES <**")
    print()
    print("1. Copia de factura")
    print("2. Facturas de cliente")
    print("3. Gráfico facturas de un año")
    print("4. Productos comunes")
    print("5. Volver al menú principal")
    print("********************")
    op = input(">> Opcion? ")
    return op

    
