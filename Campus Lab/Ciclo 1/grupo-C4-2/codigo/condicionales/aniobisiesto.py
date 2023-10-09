a = int(input("Año: "))

if a % 4 == 0:
    if a % 100 == 0 and a % 400 != 0:
        print("NO Es bisiesto")
    else:
        print("es bisiesto")
else:
    print("No es bisiesto")