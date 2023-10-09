lst = [2, 3, 4, 5, [60,80], "Maria"]

# Recorrido por sus indices
for i in range(len(lst)):
    print(lst[i], end=" - ")
    
# Recorrido por elementos
for elem in lst:
    print(elem, end=" * ")