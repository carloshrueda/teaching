
fd = open("mbox.txt", "r")

for linea in fd:
    if not linea.startswith("ID:"):
        datos = linea.split(",")
        
        print("ID" "NOMBRE" "EDAD" "SEXO" "TELEFONO",dt)

        dt += 1 
        email = linea.split()[1]
        print(email)
        


fd.close()

dt = len (datos)
print("CAntidad de correos de origen distintos:",cl)


listadatos
