

fd = open("Python/archivos/mbox.txt", "r")

cont = 0
for linea in fd:
    if linea.startswith("From:"):
        cont += 1

print(cont)

# fd.seek(0)

# cont = 0
# linea = fd.readline()
# while linea:
#     cont += 1
#     linea = fd.readline()

# print(cont)

fd.close()