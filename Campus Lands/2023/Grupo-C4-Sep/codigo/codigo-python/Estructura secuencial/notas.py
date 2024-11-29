nom = input("Nombre estudiante: ")
n1 = float(input("Ingrese Nota 1 (1.0 a 5.0) "))
n2 = float(input("Ingrese Nota 2 (1.0 a 5.0) "))
n3 = float(input("Ingrese Nota 3 (1.0 a 5.0) "))
ing = float(input("Ingrese Nota Inglés (1.0 a 5.0) "))

nf = n1 * 0.2 + n2 * 0.25 + n3 * 0.35 + ing * 0.2

print("\n", "-" * 30)
print(f"La nota definitiva de {nom} es {nf:.1f}")