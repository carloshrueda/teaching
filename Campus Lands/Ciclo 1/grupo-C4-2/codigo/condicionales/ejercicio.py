# Calcular la cantidad de digitos que tiene un numero entero positivo.
# Usar solo lo que ha visto hasta el día de hoy.

# Ejemplo:
#     num: 101
#     cantidad de digitos: 3
    
# Ejemplo 2:
#     num: 1526478982
#     cantidad de digitos es: 10

n = input("numero: ")

if n < 10:
    d = 1
elif n < 100:
    d = 2
elif n < 1000:
    d = 3
elif n < 10_000:
    d = 4
elif n < 100_000:
    d = 5
    
print ("Cantidad de digitos: ", d)