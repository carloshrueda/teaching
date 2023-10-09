lst = [2, 3, 4, 5, [60,80], "Maria"]

lst.append("Carlos Mario")
print(lst)

lst.insert(4, -3)
print(lst)

lst.extend([10,100])
print(lst)

lst.append([10, 100])
print(lst)

lst.pop(3)
print(lst)

lst.remove("Carlos Mario")
#lst.reverse()
print(lst)

lst1 = lst.copy()
lst1.pop()
print(lst)
print(lst1)

lst.append(2)
print(lst)
print(lst.count(2))

print(lst.index("Maria"))

lst1 = [4,2,99,101,1,5,6]

def myfunc(e):
    return e % 10

lst1.sort(reverse=True, key=myfunc)
print(lst1)

lst.clear()