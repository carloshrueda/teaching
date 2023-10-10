a = 1
s = 1
signo = -1
print(f"{a}, {s}", end=", ")
for i in range(8):
    signo *= -1
    a, s = s, a + signo * s
    
    print(s, end=", ")