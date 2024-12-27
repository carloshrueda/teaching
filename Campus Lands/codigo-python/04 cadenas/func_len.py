# crear una funcion que valide si una contraseña es aceptable
# es aceptable cuando:
# - tenga de 3 a 20 caracteres

def validContrasena(contra):
    longContra = len(contra)
    if longContra >= 3 and longContra <= 20:
        return True
    else:
        return False

# programa que valide una contraseña
passw = input("Contraseña: ")
while not validContrasena(passw): # validContrasena(passw) == False
    passw = input("Contraseña: ")

print("Contraseña valida ...")