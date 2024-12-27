

# programa principal
from pydoc import doc


d_categoria = {1:25_000, 2:30_000, 3:40_000, 4:45_000, 5: 60_000}

n = int(input("Cantidad de docentes? "))

docentes = {}
suma = 0
for i in range(n):
    print(f"\nDocente {i+1}")
    cedula = input("Cedula? ")
    dDatos = {}
    dDatos["nombre"] = input("Nombre? ")
    dDatos["categoria"] = int(input("Categoria (1 al 5)? "))
    dDatos["horas_lab"] = int(input("Horas Laboradas? "))
    dDatos["honorarios"] = d_categoria[dDatos["categoria"]] * dDatos["horas_lab"]

    docentes[cedula] = dDatos
    suma += dDatos["honorarios"] 

# informe
print("")
print("** INFORME **".center(40))
print("")

# recorrer el diccionario para imprimir el informe
for k in docentes.keys():
    print("Nombre:", docentes[k]['nombre'].title())
    print(f"Honorarios: ${docentes[k]['honorarios']:,}")
    print("-" * 30, "\n")

# for k, v in docentes.items():
#     print("Nombre:", v['nombre'].title())
#     print(f"Honorarios: ${v['honorarios']:,}")
#     print("-" * 30, "\n")

print("")
print("=" * 30)
print(f"Valor Total de los Honorarios ${suma:,}")
print("=" * 30)

