b = float(input("Ingrese la base: "))
h = float(input("Ingrese la altura: "))

a = b * h / 2

print("El area es: ",a)
# f-string
print(f"El area es: {a:,.3f}")
# funcion format()
print("El area es: {:,.2f}".format(a))

p = ".3"
print(f"El area es: {a:,{p}f}")
