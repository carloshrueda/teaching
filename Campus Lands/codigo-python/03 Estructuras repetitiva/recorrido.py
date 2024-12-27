# RECORRIDO DE CADENAS

# 1. por sus ELEMENTOS (caracteres)
s = "Voy volando..."
for c in s:
    print(c)

#ejemplo: cuantas vocales hay en la cadena
vocales = 0
for c in s:
    if c == "a" or c == "A" or \
        c == "e" or c == "E" or \
        c == "i" or c == "I" or \
        c == "o" or c == "O" or \
        c == "u" or c == "U":
        vocales += 1

print("Cantidad de vocales:", vocales)

print("=" * 40) 

# 2. por su INDICE
for i in range(len(s)):
    print(s[i])

#ejemplo: cuantas vocales hay en la cadena
vocales = 0
for i in range(len(s)):
    if s[i] == "a" or s[i] == "A" or \
        s[i] == "e" or s[i] == "E" or \
        s[i] == "i" or s[i] == "I" or \
        s[i] == "o" or s[i] == "O" or \
        s[i] == "u" or s[i] == "U":
        vocales += 1

# ejemplo: En que posición está el primer espacio
for i in range(len(s)):
    if s[i] == " ":
        break
print("El primer espacio está en la posición:", i)