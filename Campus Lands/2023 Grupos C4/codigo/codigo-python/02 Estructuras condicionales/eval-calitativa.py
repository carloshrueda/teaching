nom = input("Nombre del estudiante? ")
can = float(input("Calificación cuantitativa? "))

cali = ""
if can >= 0 and can < 60:
    cali = "D"
elif can >= 60 and can < 80:
    cali = "C"
elif can >= 80 and can < 90:
    cali = "B"
elif can >= 90 and can <= 100:
    cali = "A"
else:
    cali = ""

if cali != "":
    print("\n-------------------\n")
    print("Nombre: ", nom)
    print(f"Calificación cuantitativa: {can:.1f}") 
    print("Calificación cualitativa: ", cali)
else:
    print(">> Error. Calificación inválida.")
