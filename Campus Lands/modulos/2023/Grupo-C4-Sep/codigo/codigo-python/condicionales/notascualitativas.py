import math

nom = input("Nombre? ")
ncuant = math.ceil(float(input("Nota Cuantitativa (0 - 100)? ")))


# if ncuant >= 0 and ncuant < 60:
#     ncual = "D"
# elif ncuant >= 60 and ncuant < 80:
#     ncual = "C"
# elif ncuant >= 80 and ncuant < 90:
#     ncual = "B"
# elif ncuant >= 90 and ncuant <= 100:
#     ncual = "A"
# else:
#     print("Error. Nota inválida.")
#     ncual = ""

if ncuant < 0 or ncuant > 100:
    print("Error. Nota Invalida")
    ncual = ""
elif ncuant < 60:
    ncual = "D"
elif ncuant < 80:
    ncual = "C"
elif ncuant < 90:
    ncual = "B"
else:
    ncual = "A"

print("\n", "-" * 30)
print("Nombre:", nom)
print(f"Nota cuantitativa: {ncuant:.1f}")
print(f"Nota cualitativa: {ncual}")