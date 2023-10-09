if __name__ == '__main__':
    s = "dddbbbbbccdeaaffffgggg"
    dicLetras = {}
    dicCant = {}
    for l in s:
        if l not in dicLetras:
            cant = s.count(l)
            if cant not in dicCant:
                dicCant[cant] = []
            dicCant[cant].append(l)
            dicLetras[l] = 1
            
    print(dicLetras)
    print(dicCant)
    kco = sorted(list(dicCant.keys()), reverse= True)[0:3]
    print(kco)
    c = 0
    i = 0
    lkco = len(kco)
    while c < 3 and i < lkco:
        cant = kco[i]
        for letra in sorted(dicCant[cant]):
            print(letra, cant)
            c += 1
            if c == 3:
                break
        i += 1
        
    
    # kco.sort(reverse=True)
    # i = 0
    # sw = True
    # c = 0
    # while i < 3 and sw:
    #     k = kco[i]
    #     ll = dicCant[k]
    #     lenll = len(ll)
    #     if lenll > 1:
    #         ll.sort() 
    #     j= 0
    #     while j < lenll and c < 3:
        
                
    # dicLetras = {}
    # for letra in s:
    #     dicLetras[letra] = dicLetras.setdefault(letra, 0) + 1
        
    # lo = sorted(dicLetras.items(), key=lambda x:x[1], reverse=True)
    # print(lo)
    # dc = {}
    # for item in lo:
    #     cant = item[1]
    #     if cant not in dc:
    #         dc[cant] = []
    #     dc[cant].append(item[0])
    
    # print(dc)
    # lf = []
    # for cant in list(dc.keys())[0:3]:
    #     letras = dc[cant]
    #     letras.sort()
    #     for l in letras:
    #         lf.append((l, cant))
    
    # print(lf)
    # for t in lf[0:3]:
    #     print(t[0], t[1])