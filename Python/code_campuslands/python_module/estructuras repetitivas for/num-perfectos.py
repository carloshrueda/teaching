# mostrar si un numero es perfecto o no
# un numero es perfecto si la suma de sus divisores dan el mismo número.

n = int(input("Ingrese un número entero positivo mayor que 1: "))

if n > 1:
    suma = 0
    for d in range(1, n):
        if n % d == 0:
            suma = suma + d # suma += d
    
    if suma == n:
        print("El numero es perfecto")
    else:
        print("El numero no es perfecto")

else:
    print("Error. El número debe ser mayor que 1.")