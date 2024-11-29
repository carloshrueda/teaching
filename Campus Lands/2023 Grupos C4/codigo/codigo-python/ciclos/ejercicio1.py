# imprimir los siguientes 3 terminos de la siguiente sucesión
# 1, 1, 2, -1, 1, -2, s1, s2, s3,
# s1: -1, s2: -1, s3: -2


# imprimir los numero primos entre 100 y 500 que no terminen en 3

for n in range(100, 501):
    if n % 2 == 0:
        continue
    esprimo = True
    for d in range(3, n, 2):
        if n % d == 0:
            esprimo = False
            break
    if esprimo == True:
        if n % 10 == 3:
            continue
        print(n, end=", ")