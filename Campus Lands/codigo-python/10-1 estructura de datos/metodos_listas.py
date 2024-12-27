lista = [10, 20, "Juan", 30, "Sergio"]

# append
lista.append(40) # Añade al final el 40
print(lista)

# extend
lista2 = ["Maria", 20]
#lista.append(lista2)
lista.extend(lista2)
print(lista)

# insert
lista.insert(2, 50)
print(lista)

# pop
lista.pop()
print(lista)

lista.pop(2)
print(lista)

# remove 
lista.remove("Sergio")
print(lista)

lista = [40, 30, 5, 90, 20]

# min
print(min(lista))

# len
print("Tamaño lista: ", len(lista))

# sorted
print(sorted(lista))
# decreciente (mayor a menor)
print(sorted(lista, reverse=True))

lista = [40, 30, 5, 90, 20, 1, 20, 50, 60, 20]

# count
print(lista.count(20))

# del
del(lista[3]) # borra la posición 3 de la lista
print(lista)

# limpiar listas
lista.clear()
print(lista)
print(type(lista))

# del lista
# print(type(lista))
# print(lista)



