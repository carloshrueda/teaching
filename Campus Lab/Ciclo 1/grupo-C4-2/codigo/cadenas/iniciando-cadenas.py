s = "yo soy tu padre"

print(s[7])
print(s[-8])
# s[7] = "s"

# recorrido de la cadena por su indice
for i in range(len(s)):
    print(s[i], end=", ")

print()
# Recorrido de la cadena por sus elementos 
for elem in s:
    print(elem, end="-")