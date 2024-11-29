from interfaz.uireportes import ADVERTENCIA, INFORMATIVO, mnuInformes, imprimir_mensaje
from modelos.modelreport import copiaFactura,facturasCliente,graficoFacturasAnio,facturasComunes
from persistencia.persisreports import leer_datos_archivo


try:
    hshClients = leer_datos_archivo('datos/clientes.dat')
except (FileNotFoundError, Exception) as e:
    imprimir_mensaje(f"Error al abrir el archivo clientes.dat.  \n{e}", ERROR)
    exit()

try:
    hashProducts = leer_datos_archivo('datos/productos.dat')
except (FileNotFoundError, Exception) as e:
    imprimir_mensaje(f"Error al abrir el archivo clientes.dat.  \n{e}", ERROR)
    exit()

while True:
    opcion = mnuInformes()
    match opcion:
        case "1":
            copiaFactura(hshClients, hashProducts)
        case "2":
            facturasCliente()
        case "3":
            graficoFacturasAnio()
        case "4":
            facturasComunes()
        case "5":
            imprimir_mensaje("\nPresione cualqueir tecla para volver al menu principal ..", INFORMATIVO)
            input()
            exit()
        case _:
            imprimir_mensaje("Opción no válida.", ADVERTENCIA)


    imprimir_mensaje("Presione cualqueir tecla para continuar...", INFORMATIVO)
    input()

    