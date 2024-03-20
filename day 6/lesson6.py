num = 1

while num <= 30:

    if num & 1 == 0:
        print(num, "is even")
    else:
        print(num, "is odd")
    
    num += 1