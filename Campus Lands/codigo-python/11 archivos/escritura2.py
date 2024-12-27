
fd = open("Python/archivos/data2.txt", "w")

lcad = ["Los pollitos dicen\n", "Yo seré la mascota"]
fd.writelines(lcad)


fd.close()