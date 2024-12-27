import io

fd = open("Python/archivos/data.txt", "r")

cad = fd.readline().strip()
print(cad)

cad = fd.readline().strip()
print(cad)

fd.close()