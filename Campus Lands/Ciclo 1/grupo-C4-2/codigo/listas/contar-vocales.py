n = int(input("Cuantas letras desea ingresar: "))
lst = []
for i in range(n):
    letra = input(f"Ingrese la Letra # {i+1}: ")
    lst.append(letra[0])
    
vocales = ["a", "e", "i", "o", "u"]
cantidad = [0] * 5

for letra in lst:
    for p in range(len(vocales)):
        if letra == vocales[p]:
            cantidad[p] += 1
            break
        
for p in range(len(vocales)):
    print(f"Cantidad de {vocales[p]} es {cantidad[p]}")

