
fd = open("Python/archivos/data2.txt", "a")

lcad = ["Nos vemos de azado\n", "Invita Anderson"]
fd.writelines(lcad)


fd.close()