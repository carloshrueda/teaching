# Dado la base y la altura de un triángulo, calcular y mostrar su área, a través de la 
# fórmula área = (base*altura)/2

# ENTRADA
# b:base : float 
# h:altura : float

b = float(input("Introduzca la base del triángulo: "))
h = float(input("Introduzca la altura del tríangulo: "))

a = b * h / 2

# formateando la salida con format()
print("El área del triángulo es: {:.1f}".format(a))

# formateando la salida con cadenas f-string
print(f"El área del tríangulo es: {a:.1f}")


# PROCESO
# a = b * h / 2

# SALIDA
# a:area : float
