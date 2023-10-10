# imprima los numeros pares del 2 al 50 incluyendo el 50.

# for par in range(2, 51, 2):
#     print(par, end="-,-")
    
# imprima los multiplos de 5 que hay menores de 100

# for m in range(5, 100, 5):
#     print(m, end=", ")
    
# indicar si un numero ingresado por el usuario es primo o no

n = int(input("numero: "))

if n > 1:
    if n % 2 == 0:
        print("El número No es primo")
    else:
        esprimo = True
        for d in range(3, n, 2):
            if n % d == 0:
                esprimo = False
                break
                
        if esprimo == True:
            print("El número es primo")
        else:
            print("El número no es primo")
        
else:
    print("Error. Número inválido, deben ser mayores a 1.")