
hshPathfiles = {"clientes": "datos/clientes.dat", "productos": "datos/productos.dat", "ventas": "datos/ventas.dat"}


def leer_datos_archivo(ruta):
    datos = {}
    with open(ruta, 'r', encoding="utf8") as archivo:
        encabezados = archivo.readline().strip().split(';')
        for linea in archivo:
            valores = linea.strip().split(';')
            llave = valores[0]
            # llenar el diccionario con los datos
            registro = {}
            for i in range(1, len(encabezados)):
                registro[encabezados[i]] = valores[i]
            datos[llave] = registro
    return datos


# r= leer_datos_archivo(hshPathfiles["productos"])
# print(r)