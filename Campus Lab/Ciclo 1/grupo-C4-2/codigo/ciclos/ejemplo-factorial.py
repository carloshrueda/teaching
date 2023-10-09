# Calcular el factorial de un numero
# Factorial de 5 = 1 x 2 x 3 x 4 x 5 = 120
# Factorial de 5 = 1 x 2 x 3 x 4 x 5 x 6 = 720
# Factorial de 3 = 1 x 2 x 3 = 6


n = int(input("Numero? "))

if n >= 0:
    f = 1
    for i in range(1, n+1):
        f = f * i
        
    print(f"El factorial de {n} es {f}")
    
    
else:
    print("Error. El número debe ser mayor o igual a 0.")