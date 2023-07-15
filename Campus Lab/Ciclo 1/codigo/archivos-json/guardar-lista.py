# Crear archivo json con una estructura de datos lista

import json

def myfuncion(dato):
    return dato * 2

lista = [10, 20, 30, 40, 60, 70]


with open("Campus Lab/Ciclo 1/codigo/archivos-json/lista.json", "w") as archivo:
    lista.append(myfuncion(60))
    json.dump(lista, archivo)
    print("Se ha escrito en disco")
    
if not archivo.closed:
    print("Cerrando archivo")
    archivo.close()
    
print("Se ha cerrado el archivo")