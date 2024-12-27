import io

fd = open("Python/archivos/data.txt", "r")

cad = fd.readlines()
print(cad)

fd.close()