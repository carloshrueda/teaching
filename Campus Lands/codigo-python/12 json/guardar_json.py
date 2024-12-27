import json

lista = ["Daniel", "Maria", "Ada", "Julian", "Gabriel", ["Julian", "Ricardo"]]
# campers = {
#     1: {
#         "nombre": "Daniel",
#         "edad" : 21,
#         "sexo" : "m",
#         "telefonos": [123, 456]
#     },

#     2: {
#         "nombre": "Maria",
#         "edad" : 20,
#         "sexo" : "f",
#         "telefonos": [789]
#     },

# }

with open("Python/json/datos.json", "w") as fd:
    json.dump(lista, fd)

if not fd.closed: # True si el archivo esta cerrado
    fd.close()