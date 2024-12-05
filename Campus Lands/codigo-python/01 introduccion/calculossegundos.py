seg = int(input("Segundos? "))

h = seg // 3600
m = (seg % 3600) // 60
s = (seg % 3600) % 60

print("Horas: ", h)
print("Minutos: ", m)
print("Segundos: ", s)