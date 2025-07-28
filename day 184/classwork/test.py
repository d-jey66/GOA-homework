import os
# CW 1

# with open("C:/Users/LEGION_PRO/OneDrive/Desktop/GOA-homework/day 184/test.txt", "r", encoding="utf-8") as file:
#     print(file.read())


# CW 2

# file = open("C:/Users/LEGION_PRO/OneDrive/Desktop/GOA-homework/day 184/test.txt", "r")
# data = file.read()
# file.close()

# numbers = list(map(int, data.split()))
# even = []
# odd = []

# for n in numbers:
#     if n % 2 == 0:
#         even.append(n)
#     else:
#         odd.append(n)

# print("Even:", even)
# print("Odd:", odd)

# CW 3

# with open("C:/Users/LEGION_PRO/OneDrive/Desktop/GOA-homework/day 184/test.txt", "r") as file:
#     text = file.read()
#     words = text.split()
#     print(len(words))


# CW 4

# with open("C:/Users/LEGION_PRO/OneDrive/Desktop/GOA-homework/day 184/test.txt") as file:
#     numbers = [int(num) for num in file.read().split()]

# with open("C:/Users/LEGION_PRO/OneDrive/Desktop/GOA-homework/day 184/negatives.txt", "w") as Nfile, open("C:/Users/LEGION_PRO/OneDrive/Desktop/GOA-homework/day 184/positives.txt", "w") as Pfile:
#     for num in numbers:
#         if num < 0:
#             Nfile.write(str(num) + " ")
#         elif num > 0:
#             Pfile.write(str(num) + " ")
