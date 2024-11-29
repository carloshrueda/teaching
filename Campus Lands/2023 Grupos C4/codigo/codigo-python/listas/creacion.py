# Crear listas vacías
lst = []
lst = list()

# Crear listas con elementos
lst1 = [2, 3, 4, 5, [60,80], "Maria"]
print(len(lst1))

#Acceder
print(lst1[5])

#modificar un elemento
lst1[5] = "Maria Victoria"
print(lst1)

#Slice de la lista
print(lst1[4:6])