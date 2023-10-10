# n = int(input("Numero? "))
# while n != -1:
#     if n % 2 == 0:
#         print(f"\tEl número es par")
#     else:
#         print(f"\tEl número es impar")
        
#     n = int(input("Numero? "))

# print("\nFIN DEL PROGRAMA")

while True:
    n = int(input("Numero? "))
    if n != -1:
        if n % 2 == 0:
            print(f"\tEl número es par")
        else:
            print(f"\tEl número es impar")
    else:
        break
        
print("\nFIN DEL PROGRAMA")