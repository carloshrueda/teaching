nom = input("Nombre? ")
sal = int(input("Salario? "))

if sal <= 1_200_000:
    aux = 120_000
else: 
    aux = 0
    
print("\n", "-" * 30)
print("Nombre:", nom)
print(f"Salario: ${sal:,.0f}")
print(f"Aux Tx: ${aux:,.0f}")

