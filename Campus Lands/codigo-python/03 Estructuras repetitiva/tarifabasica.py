nombre = input("Nombre: ")
estrato = int(input("Estrato: "))
continuar = True
while continuar: 
    tbas = 0
    if estrato == 1:
        tbas = 10_000
    elif estrato == 2:
        tbas = 15_000
    elif estrato == 3:
        tbas = 30_000
    elif estrato == 4:
        tbas = 50_000
    elif estrato == 5:
        tbas = 65_000

    print("\n" + "=" * 40)
    print("Nombre:", nombre)
    print("Tarifa básica: ", tbas)
    print("\n", "=" * 40)

    opcion = input("\n>>> Desea continuar (S/N)? ")
    # continuar = opcion == "N" or opcion == "n"

    if opcion == "N" or opcion == "n":
        continuar = False
    else: 
        print("\n", "-" * 40)
        nombre = input("Nombre: ")
        estrato = int(input("Estrato: "))