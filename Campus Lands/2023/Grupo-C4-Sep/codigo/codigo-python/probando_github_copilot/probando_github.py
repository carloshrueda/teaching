import hashlib

def encriptar_password(password):
    sha_signature = hashlib.sha256(password.encode()).hexdigest()
    return sha_signature

# Ejemplo de uso
password = "mi_password_secreto"
password_encriptado = encriptar_password(password)
print(f"Password encriptado: {password_encriptado}")