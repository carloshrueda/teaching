def lst2dicc(lst):
    d = {}
    for e in lst:
        k = e.pop("id")
        d[k] = e
    return d    


def dicc2lst(dicc):
    l = []
    for k, v in dicc.items():
        v["id"] = k
        l.append(v)
    return l


def mifunc(d):
    return d["edad"]


dicc = {1: {"nombre": "carlos", "edad": 25},
        2: {"nombre": "Daniela", "edad": 20},
        3: {"nombre": "Juan", "edad": 28},
        4: {"nombre": "Sergio", "edad": 45}}
print(dicc, "\n")

# lst = dicc2lst(dicc)
# print(lst, "\n")

# lstsort = sorted(lst, reverse=True, key=mifunc)
# print(lstsort, "\n")

# dicc = lst2dicc(lstsort)
# print(dicc, "\n")

# ********************************************

# def ltpl2dicc(ltpl):
#     d = {}
#     for tpl in ltpl:
#         d[tpl[0]] = tpl[1]

#     return d

# def mifunc(ltpl):
#     return ltpl[1]["edad"]

# lst = dicc.items()
# print(lst, "\n")

# lstsort = sorted(lst, reverse=True, key=mifunc)
# print(lstsort, "\n")

# dicc = ltpl2dicc(lstsort)
# print(dicc, "\n")

# ********************************************

# def ltpl2dicc(ltpl):
#     d = {}
#     for tpl in ltpl:
#         d[tpl[0]] = tpl[1]

#     return d

# def mifunc(ltpl):
#     return ltpl[1]["edad"]


def orden_burbuja(lst):
    N = len(lst)
    for i in range(N-1):
        sw = False
        for j in range(i+1, N):
            if lst[i][1]["edad"] < lst[j][1]["edad"]:
                t = lst[i]
                lst[i] = lst[j]
                lst[j] = t
                sw = True

        if not sw:
            break


def ordenar(d):
    # convertir el diccionario en lista
    lst = list(dicc.items())  # devuelve un dict_items no es aun una lista
    print(lst, "\n")

    # ordenar la lista
    # lstsort = sorted(lst, reverse=True, key=mifunc)
    orden_burbuja(lst)
    # print(lst, "\n")

    # devolver la lista ordenada
    return lst


# se le pasa diccionario y regresa una lista con los elementos ordenados
lst = ordenar(dicc)

# imprimir la lista ordenada con datos del diccionario
print(lst)
print("")

for e in lst:
    print("Codigo:", e[0])
    print("Nombre:", e[1]["nombre"])
    print("Edad:", e[1]["edad"], "<---\n")

# pasar de lista a diccionario
dicc = dict(lst)
print(dicc)
