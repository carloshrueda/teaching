# funcion que reciba un numero y devuelva True si es primo o False si no lo es

def esprimo(num):
    if num > 1:
        esprimo = True
        for i in range(2, num):
            if num % i == 0:
                esprimo = False
                break
        
        if esprimo: # es equivalente a: esprimo == True
            return True
        else:
            return False

    else:
        return False
    

def esprimo2(num):
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                return False
        return True
    else:
        return False
    

# Programa que reciba una serie de numeros hasta que se ingrese un primo
n = int(input("Numero? "))
while not esprimo(n): # es equivalente a esprimo(n) == False
    n = int(input("Numero? "))
