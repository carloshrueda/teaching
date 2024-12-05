ruta = "Campus Lab/Ciclo 1/codigo/archivos/miarchivo.txt"
fd = open(ruta, "r+")

# fd.write("\nSabado de Refuerzo archivos")
# fd.seek(5)
lectura=fd.readlines()
print(lectura)

fd.close()

ruta = "Campus Lab/Ciclo 1/codigo/archivos/miarchivo-copia.txt"
fd = open(ruta, "w")
fd.write("Inicio de copia\n")
fd.writelines(lectura)
fd.close()

print("Fin del progama")