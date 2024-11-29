nom = input("Nombre del trabajador? \n")
sal = int(input("Salario del trabajodor? \n$"))

aux = 0
if sal <= 1_200_000:
    aux = 120_000

print(f"El auxilo del transporte es de ${aux:,}\n")