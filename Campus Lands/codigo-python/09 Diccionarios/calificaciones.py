# est = [ {cod, nom, nota}, {cod, nom, nota}  ]

# est = {
#     cod1 : [nom, n1, n2, n3, nd, a/r],
#     cod2 : [nom, n1, n2, n3, nd, a/r],
# }

# est = {
#     cod1 : {
#         nom:,
#         n1:,
#         n2,
#         n3,
#         nd,
#         a/r
#     }
# }


est = []
cod = 1
cont = 0
while cod != 999:
    print("\nDatos estudiante # ", cod + 1)
    cod = int(input("Codigo? "))
    if cod != 999:
        cont += 1
        datos = { "codigo" : cod }
        datos["nom"] = input("Nombre? ")
        datos["nota1"] = round(float(input("Nota 1 (0 a 5) ? ")), 1)
        datos["nota2"] = round(float(input("Nota 2 (0 a 5) ? ")), 1)
        datos["nota3"] = round(float(input("Nota 3 (0 a 5) ? ")), 1)
        datos["notadef"] = round(datos["nota1"] * 0.3 + datos["nota2"] * 0.3 + datos["nota3"] * 0.4, 1)
        if (datos["notadef"] >= 3 ):
            datos["estado"] = "Aprobo" 
        else:
            datos["estado"] = "Reprobo"
        
        est.append(datos)
        
print("\n","\r=" * 40)
print("\tINFORME DE NOTAS")
print("\n","\r=" * 40)

for elem in est:
    print(f"{elem['nom']}\t{elem['notadef']}\t{elem['estado']}")
    
# for i in range(len(est)):
#     print(f"{est[i]['nom']}\t{est[i]['notadef']}\t{est[i]['estado']}")
    