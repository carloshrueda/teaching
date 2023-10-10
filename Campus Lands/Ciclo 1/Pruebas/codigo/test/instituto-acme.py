import json

def menu():
    pass

def estudiantes(ruta):
    pass

def notas(ruta):
    pass

def reportes(ruta):
    pass

def cargarInfo(ruta, dic):
    fd = open(ruta, "a+")
    fd.seek(0)
    # verificar si tengo datos
    try:
        dic = json.load(fd)
    except Exception as e:
        dic = {}
    fd.close()
    print(dic)

# PROGRAMA PRINCIPAL
ruta = "Campus Lab/Ciclo 1/Pruebas/codigo/test/instituto.json"
dicdata = {}
cargarInfo(ruta, dicdata)
while True:
    op = menu()
    if op == "1":
        estudiantes(ruta)
    elif op == "2":
        notas(ruta)
    elif op == "3":
        reportes(ruta)
    elif op == "4":
        print("Gracias por usar SisNotACME")
        input("Presione cualquier tecla para salir ...")
        break