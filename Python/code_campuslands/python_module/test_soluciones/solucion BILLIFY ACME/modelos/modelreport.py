import os

from interfaz.uireportes import ADVERTENCIA, ERROR, titMenu, imprimir_mensaje
from persistencia.persisreports import leer_datos_archivo

def copiaFactura(clientes, productos):
    titMenu("***> 1. Copia de factura <***")
    
    codigo_factura = input("\nIngrese el código de la factura: ")
    
    try:
        with open('datos/ventas.dat', 'r') as ventas:
            encabezado_impreso = False
            total_sin_iva = 0
            
            lstencabezado = ventas.readline().strip().split(';')

            for linea in ventas:
                partes = linea.strip().split(';')
                if partes[0] == codigo_factura:
                    if not encabezado_impreso:
                        cliente_id = partes[1]
                        fecha = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                        nombre_cliente, telefono_cliente = clientes[cliente_id]
                        print(f"Factura N°: {numero_factura}")
                        print(f"Fecha: {fecha}")
                        print(f"Cliente: {nombre_cliente}")
                        print(f"Teléfono: {telefono_cliente}")
                        print("-" * 40)
                        encabezado_impreso = True
                        
    except (FileNotFoundError, Exception) as e:
        imprimir_mensaje(f"No se encontró el archivo de ventas. \n{e}", ERROR)
        return

    factura = None
    for venta in ventas:
        if venta['codigo_factura'] == codigo_factura:
            factura = venta
            break
    
    if factura:
        codigo_cliente = factura['codigo_cliente']
        items = factura['items'].split(',')  # assuming items are stored as a comma-separated string
        
        cliente = next((cliente for cliente in clientes if cliente['codigo_cliente'] == codigo_cliente), None)
        
        if cliente:
            print("-" * 20)
            print(f"Factura numero: [{codigo_factura}]")
            print(f"Cliente: {cliente['nombre']} {cliente['apellido']}")
            print(f"Dirección: {cliente['direccion']}")
            print(f"Teléfono: {cliente['telefono']}")
            print(f"Email: {cliente['email']}")
            print("\nDetalles de la factura:")
            print("-" * 20)
            total = 0
            for i, item in enumerate(items):
                codigo_producto, cantidad = item.split(':')
                producto = next((producto for producto in productos if producto['codigo_producto'] == codigo_producto), None)
                if producto:
                    nombre_producto = producto['nombre']
                    precio_producto = float(producto['precio'])
                    subtotal = precio_producto * int(cantidad)
                    total += subtotal
                    print(f"{i+1:2}. {nombre_producto} - {cantidad} x {precio_producto} = {subtotal}")
            print("-" * 20)
            print(f"\nTotal: {total}")
            print("-" * 20)
        else:
            imprimir_mensaje("Cliente no encontrado.", ADVERTENCIA)
    else:
        imprimir_mensaje("Factura no encontrada.", ADVERTENCIA)
    
    
def facturasCliente():
    pass

def graficoFacturasAnio():
    pass

def facturasComunes():
    pass