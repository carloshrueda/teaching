import json
import pprint
from pathlib import Path

def cargar(archivo):
    lib = {}
    with open(archivo, "r") as fd:
        lib = json.load(fd)
    
    if not fd.closed:
        fd.close()

    return lib

def guardar(lib, archivo):
    with open(archivo, "w") as fd:
        json.dump(lib, fd)
    
    if not fd.closed:
        fd.close()

def leerPrecio():
    while True:
        try:
            precio = int(input("Precio del libro: "))
            if precio < 500:
                print(">>> Error. Precio incorrecto.")
                continue
            return precio
        except ValueError:
            print(">>> Error. Precio inválido.")

def leerAutor():
    while True:
        try:
            autor = input("Autor del libro? ")
            if len(autor.strip()) == 0:
                print(">>> Error. Autor inválido.")
                continue
            return autor
        except Exception as e:
            print("Error al ingresar el autor.\n" + e)

def leerTitulo():
    while True:
        try:
            tit = input("Título del libro? ")
            if len(tit.strip()) == 0:
                print(">>> Error. Título inválido.")
                continue
            return tit
        except Exception as e:
            print("Error al ingresar el título.\n" + e)

def leerCodigo():
    while True:
        try:
            cod = input("Código del libro? ")
            if len(cod.strip()) == 0:
                print(">>> Error. Código inválido.")
                continue
            return cod
        except Exception as e:
            print("Error al ingresar el codigo.\n" + e)

def insertar(lib):
    print("\n\n**1. INSERTAR ***")

    cod = leerCodigo()
    if cod not in lib:
        titulo = leerTitulo()
        autor = leerAutor()
        precio = leerPrecio()

        datlib = {
            "titulo" : titulo,
            "autor" : autor,
            "precio" : precio
        }

        lib[cod] = datlib

        # pprint.pprint(lib)
        lib = dict(sorted(lib.items()))
        # pprint.pprint(lib)
    else:
        print("El codigo ya exite en la libreria.")

    input("Presione cualquier tecla para volver al menu...")
    return lib
    

def consultar(lib):
    print("\n\n**2. CONSULTAR ***")
    input("Presione cualquier tecla para volver al menu...")

"""
libreria = {
    codigo1(str): {
        titulo:(str)
        autor:(str)
        precio:int
    },

    codigo2(str): {
        titulo:(str)
        autor:(str)
        precio:int
    }
}
"""

def menu():
    while True:
        print("** LIBRERIA **")
        print("1. Insertar")
        print("2. Consultar")
        print("3. Salir")

        print(">>> Opcion? ", end="")
        try:
            opcion = int(input())
            if opcion < 1 or opcion > 3:
                print("Error. Opción no valida.")
                input("Presione cualquier tecla para volver al menu...")
                continue
            return opcion
        except ValueError:
            print("Error. Opción no valida.")
            input("Presione cualquier tecla para volver al menu...")



def existeArchivo(ruta_archivo):
    # Verifica si el archivo existe utilizando Path
    archivo = Path(ruta_archivo)
    return archivo.is_file()



# PROGRAMA PRINCIPAL 

libreria = {}
archivo = "Python/json/liberia.json"

if existeArchivo(archivo):
    libreria = cargar(archivo)
    # pprint.pprint(libreria)


while True:
    op = menu()
    match op:
        case 1:
            libreria = insertar(libreria)
            guardar(libreria, archivo)
        case 2:
            consultar(libreria)
        case 3:
            print("\n\nGracias por usar el sofware.\n")
            break


        