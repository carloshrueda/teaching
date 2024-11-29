tel = input("Ingrese telefono con formato(+codpais-num-ext)? ")
parttel = tel.split("-")

#parttel : [+codpais, num, ext]
#Validar +35
if len(parttel) == 3 and parttel[0].startswith("+") and \
    len(parttel[0]) == 3 and parttel[0][1:].isdigit() and \
        parttel[1].isdigit() and len(parttel[2]) == 2 and \
            parttel[2].isdigit():
                print(parttel[1])
else:
    print("Formato inválido")