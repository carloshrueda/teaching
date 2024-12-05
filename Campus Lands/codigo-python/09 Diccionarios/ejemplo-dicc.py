tienda = {"item" : ['Lapiz', 'Carpeta', 'Marcador'],
          "cantidad" : [3, 10, 5],
          "valor" : [3.50, 4.25, 7.85]}

# print(tienda["valor"][2])
# print(tienda.get("valor")[2])
# print(tienda.fromkeys(["proveedor","Mongol"], "Pencil"))
# print(tienda.items())
# print(tienda.keys())
# print(tienda.values())
# tienda["proveedor"] = ["Mongol", "Norma", "Pencil"]
# print(tienda)
# tienda.pop("proveedor")
# print(tienda)
# tienda.setdefault("proveedor")
# print(tienda)

#Recorridos por valor
# for k in tienda.keys():
#     print(tienda[k])
    
# # Recorrido por diccionario
for elem in tienda:
    print(tienda[elem])

# Recorrido por items
for k, v in tienda.items():
    print(k, "->", v)