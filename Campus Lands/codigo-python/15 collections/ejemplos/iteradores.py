import collections
from collections.abc import Iterable

cadena = "Campus"

elem = iter(cadena)
print(next(elem)) # C
print(next(elem)) # a
print(next(elem)) # m
print(next(elem)) # p
print(next(elem)) # u
print(next(elem)) # s

print(next(elem)) # ?
