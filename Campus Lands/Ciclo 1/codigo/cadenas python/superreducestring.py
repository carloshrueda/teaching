def superReducedString(s):
    reduccion = True
    slen= len(s)
    while reduccion and slen > 0:
        reduccion = False
        i = 0
        news = ""
        while i < slen:
            if i < slen - 1 and s[i] == s[i+1]:
                reduccion = True
                i += 2
            if i < slen:
                news += s[i]
            else:
                news += ""
            i += 1
        s = news
        slen= len(s)
        
                
    if len(s) > 0:
        return s
    else:
        return "Empty String"


str = "zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"
rta= "tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"
#str = "oolaa"
#rta = "l"

print(str)
print(superReducedString(str))
print(rta)