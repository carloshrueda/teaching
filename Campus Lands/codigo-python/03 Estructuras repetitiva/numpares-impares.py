
num = int(input("Ingrese un número: "))
while num != -1:
    if num > 0:
        if num % 2 == 0:
            print("Es par.")
        else:
            print("Es impar.")

    num = int(input("\nIngrese un número: "))