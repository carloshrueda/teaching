while True:
    try:
        n = input("Nombre: ")
        if n == None or n.strip() == "":
            print("Nombre inválido.")
            continue
        break
    except Exception as e:
        print("Ha sucedido un Error: ", e)
        
print("\n el número que se digitó es: ", n)