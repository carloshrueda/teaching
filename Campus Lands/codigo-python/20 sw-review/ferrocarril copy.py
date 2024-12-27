# Suponga que existen N ciudades en red de ferrocarriles de un país, 
# y que sus nombres están almacenados en una matriz llamada matCiudades. 
# Diseñe un programa en el que lea el nombre de cada una de las ciudades y 
# los nombres de con los que está enlazada. Luego que el programa pueda 
# responder si hay una vía directa entre dos ciudades o no
def imprimirMat(m):
    for f in range(len(m)):
        for c in range(len(m[f])):
            print(m[f][c], end="\t")
        print("")

def conectar(mCiudades, posOrig, lstCiudConex, matConex):
    cOrig = mCiudades[posOrig]
    for cDest in lstCiudConex:
        print(posOrig, cDest)
        matConex[posOrig][cDest] = 1
        matConex[cDest][posOrig] = 1

    # imprimirMat(matConex)

def conexionCiudad(ciudad, ciudades):
    print("Listado de ciudades disponibles: ")
    for i, c in enumerate(ciudades):
        print(f"{i+1}. {c}", end=", ")

    listado = input("\nIngrese los números de las ciudades separandolos por espacio\n")

    lstcod = listado.split(" ")
    
    lstciudades = []
    if len(lstcod) > 0:
        for scod in lstcod:
            if len(scod.strip()) != "":
                cod = int(scod)
                lstciudades.append(cod - 1)

    return lstciudades

def crearMat(dimension):
    m = []
    for i in range(dimension):
        m.append([0] * dimension)

    return m


# PROGRAMA PRINCIPAL

matCiudades = ["Bogota", "Barranquilla", "Medellin", "Cali", "Bucaramanga"]

matConex = crearMat(len(matCiudades))

for i, ciudad in enumerate(matCiudades):
    print(f"[{ciudad.upper()}]")
    lstCiudadesConex = conexionCiudad(ciudad, matCiudades)
    print(lstCiudadesConex)
    conectar(matCiudades, i, lstCiudadesConex, matConex)

print("\n\n")