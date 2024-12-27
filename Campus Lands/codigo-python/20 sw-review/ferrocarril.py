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

def hayConexion(origen, destino, lstCiudades, matConex):
    # esta funcion devuelve True si hay conexión y False si no hay
    if (origen in lstCiudades) and (destino in lstCiudades):
        # si existe la ciudad de origen y destino en el listado de ciudades
        posOrigen = lstCiudades.index(origen)
        posDestino = lstCiudades.index(destino)

        if matConex[posOrigen][posDestino] == 1:
            return True
        else:
            return False
    else:
        return False
    
def conectar(posCiudOrig, lstCiudadesConex, matConex):
    # se recorre el listado de ciudades donde hay conexión
    for posCiudDest in lstCiudadesConex:
        # La fila es la ciudad de origen
        # La columna es la ciudad de destino, donde hay conexión
        # Se coloca el valor de 1 para que se indique que hay conexión entre
        # esas dos ciudades
        matConex[posCiudOrig][posCiudDest] = 1

def capturarCiudad(ciudades):
    # funcion que captura la ciudad con la que hay conexión
    # Garantiza que exista la ciudad del listado.

    pos = None
    while True:
        ciudad = input(">>> Ingrese la ciudad con conexión: ").strip().capitalize()
        # si existe la ciudad digitada en el listado de ciudades
        if ciudad in ciudades:
            # encontrar la posición de la ciudad en el listdo de ciudades
            pos = ciudades.index(ciudad)
            break
        else:
            print("---> Error. La ciudad no existe.\n")

    # se devuelve la posición de la ciudad ingresada en el listado de ciudades
    return pos

def conexionCiudad(ciudades):
    print("Listado de ciudades disponibles: ")
    for c in ciudades:
        print(c, end=", ")
    print("")

    # conjunto de ciudades con destino. Para que no haya repetidos
    ciudadDest = set() 

    continuar = "s"
    while continuar != "n":
        # agregar una ciudad de destino al conjunto
        ciudadDest.add(capturarCiudad(ciudades))
        continuar = input("\n>>> Desea continuar (s\\n)? ").lower()

    return ciudadDest

def crearMat(dimension):
    m = []
    for i in range(dimension):
        m.append([0] * dimension)

    return m


# PROGRAMA PRINCIPAL

matCiudades = ["Bogota", "Barranquilla", "Medellin", "Cali", "Bucaramanga"]

# Matriz de conexiones
matConex = crearMat(len(matCiudades))

# listado de ciudades conectadas a la ciudad de origen
lstCiudadesConex = []

# Enumerate es un metodo que devuelve la posición de un elemento de la lista
# y devuelve el elemento propiamente dicho.
for posCiudOrigen, ciudadOrigen in enumerate(matCiudades):
    print(f"Conexiones de [{ciudadOrigen.upper()}]")

    # capturar las ciudades conectadas a la ciudad de origen
    # Devuelve un conjunto de ciudades conectada
    # Un conjunto para que no haya repetidos
    lstCiudadesConex = conexionCiudad(matCiudades)

    # actualizar matriz de conexiones de acuerdo 
    # al listado que el usuario proporcionó
    # se envía:
    # 1. la posición de la ciudad de origen
    # 2. las posiciones de las ciudades destino con las cuales hay conexion directa
    # 3. la matriz de conexiones para actualizar
    conectar(posCiudOrigen, lstCiudadesConex, matConex)

    print("-" * 30, "\n")


print("\n")

print("=" * 52)
print("| Se terminó de ingresar las conexiones directas.  |")
print("| \033[92mSe procede a consultar si hay destinos directos.\033[0m |")
print("=" * 52)

# preguntar la ciudad de origen y destino para saber si hay conexión
origen = input("\033[93mCiudad de origen? \033[0m").strip().capitalize()
destino = input("\033[93mCiudad de destino? \033[0m").strip().capitalize()

# Si hay conexión directa desde el origen hasta el destino
# del listado de ciudades en la matriz de conexión 
if hayConexion(origen, destino, matCiudades, matConex):
    print("\033[32m>>> Hay conexión directa.<<<\033[0m")
else:
    print("\033[35m**> No hay conexión directa.<**\033[0m")

