def superReducedString(s):
    reducible = True
    ls = list(s)
    while reducible:
        reducible = False
        i = 0
        while i < len(ls) - 1:
            if ls[i] != ls[i+1]:
                i += 1  
            else:
                reducible = True
                del ls[i:i+2]
                
    return "".join(ls) or "Empty String"



def superReducedString2(s):
    reducible = True
    ls = []
    while reducible:
        reducible = False
        i = 0
        lens =len(ls) - 1
        while i < lens:
            if s[i] != s[i+1]:
                i += 1  
            else:
                #reducible = True
                del ls[i:i+2]
                
    return "".join(ls) or "Empty String"

str = "zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"
rta= "tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"

str = "baab"
rta = "Empty String"

print(superReducedString(str))
print(rta)
print(rta == superReducedString(str))