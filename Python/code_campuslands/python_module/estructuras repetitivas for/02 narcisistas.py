# Encontrar si un número es narcisista o no?
# Es narcisista si la suma de sus digitos elevado a la cantidad de digitos es igual al número
# ejemplo:
# 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

import math

# paso 1 - pedir el numero
n = int(input("Ingrese el número? "))
if n > 0:
    # paso 2 - calcular la longitud del numero
    lnum = int(math.log10(n)) + 1
    # print("longitud: ", lnum)

    # paso 3 - sacar los digitos del número y sumarlos elevandolos a logitud del numero
    suma = 0
    temp = n
    for i in range(1, lnum + 1):
        d = n % 10
        suma += d ** lnum
        n = n // 10

    if suma == temp:
        print("El número es narciso")
    else:
        print("El número no es narciso")
else:
    print("Error.Ingrese un número entero positivo.")

