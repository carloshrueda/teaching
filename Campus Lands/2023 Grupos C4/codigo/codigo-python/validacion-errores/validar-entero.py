while True:
    try:
        n = int(input("Numero: "))
        r = 5 /n
        break
    except ValueError:
        print("Error. Número entero inválido. intente de nuevo.")
        input("Presione cualquier tecla para continuar...")
    except ZeroDivisionError:
        print("Error. No se puede dividir por cero.")
        input("Presione cualquier tecla para continuar...")
        
print("\n el número que se digitó es: ", n)