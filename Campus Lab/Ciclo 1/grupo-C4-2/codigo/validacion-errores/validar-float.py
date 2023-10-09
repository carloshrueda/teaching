while True:
    try:
        n = float(input("Numero real: "))
        break
    except ValueError:
        print("Error. Número real inválido. intente de nuevo.")
        input("Presione cualquier tecla para continuar...")
    except Exception as e:
        print("Ha sucedido un Error: ", e)
        
print("\n el número que se digitó es: ", n)