import random

def imprimirMat(m):
    for f in range(len(m)):
        for c in range(len(m[f])):
            print(m[f][c], end="\t")
        print("")
        
def prodMaxSem(m):
    vtasProd = []
    for f in range(len(m)):
        suma = 0
        for c in range(len(m[f])):
            suma += m[f][c]
        vtasProd.append(suma)
    
    # for f in range(len(m)):
    #     vtasProd.append(sum(m[f]))
    
    # vtasmax : [101, 89, 909, 15, 65]
    vtasmax = max(vtasProd) # 909
    prodMaxVtas = vtasProd.index(vtasmax) + 1 # 3
    return prodMaxVtas
    
def llenarMat(m):
    for f in range(len(m)):
        for c in range(len(m[f])):
            m[f][c] = random.randint(18, 119)    
        
def crearMatriz(fil, col):
    m = []
    for i in range(fil):
        c = [0] * col
        m.append(c)
        
    return m

mat = crearMatriz(5, 7)
llenarMat(mat)
imprimirMat(mat)

print("\nEl producto que genara más ingresos a la semana es: ", prodMaxSem(mat))

