# Indicar si un numero es primo

num = int(input("Numero? "))

if num > 1:
    esprimo = True
    for i in range(2, num):
        if num % i == 0:
            esprimo = False
            break
    
    if esprimo: # es equivalente a: esprimo == True
        print("Es primo.")
    else:
        print("No es primo.")

else:
    print("No es primo")