dicCat = {}
dicCat = {1: 10000, 2: 20000, 3: 30000, "2": "Dos", 4: [15000, 25000]}
# dicCat.clear()
dicCat[4].append(35000)
#modificar
dicCat[2] = 22000
print(dicCat.get(2, "No existe esta llave"))
del dicCat["2"]
print(dicCat.get("2", "No existe esta llave"))
print(dicCat.get(2, "No existe esta llave"))
