lista = ["Carlos", "Daniel", "Maria", "Laia", "Angel", "Oscar"]

nombre = "Oscar"
if nombre in lista:
    pos = lista.index(nombre)
    print("Pasa al ciclo 3")
    print("Posición en la lista:", pos)
else:
    print("Gracias por participar en Python")