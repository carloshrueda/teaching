a = int(input("numero 1: "))
b = int(input("numero 2: "))
c = int(input("numero 3: "))

if a >= b and a >= c:
    mayor = a
    if b >= c:
        medio = b
        menor = c
    else:
        medio = c
        menor = b
elif b >= a and b >= c:
    mayor = b
    if a >= c:
        medio = a
        menor = c
    else:
        medio = c
        menor = a
else:
    mayor = c
    if a >= b:
        medio = a
        menor = b
    else:
        medio = b
        menor = a


print(mayor, medio, menor)