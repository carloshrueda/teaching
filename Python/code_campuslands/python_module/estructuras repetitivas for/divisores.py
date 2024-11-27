# mostrar los divisores de un número ingresado por el usuario

n = int(input("Ingrese un número entero positivo mayor que 1: "))

if n > 1:
    for d in range(1, n):
        if n % d == 0:
            print(d, end=", ")


else:
    print("Error. El número debe ser mayor que 1.")
