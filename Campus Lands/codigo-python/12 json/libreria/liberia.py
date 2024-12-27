from interfaz.menu import menu
from modelo.modelo import insertar, consultar
from persistencia.persistencia import cargar

# PROGRAMA PRINCIPAL 

libreria = {}
archivo = "Python/json/libreria/liberia.json"
libreria = cargar(archivo)

print(libreria)

while True:
    op = menu()
    match op:
        case 1:
            libreria = insertar(libreria, archivo)
        case 2:
            consultar(libreria)
        case 3:
            print("\n\nGracias por usar el sofware.\n")
            break


        