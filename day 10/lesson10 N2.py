family = ["dato", "natia", "dachi", "nia"]
ages = [37, 35, 12, 10]

full_sentence = "My dad's name is: {}, and he is {} years old, My mom's name is: {} and she is {} years old, My name is: {} and I'm {} years old, my sister's name is: {} and she is {} years old".format(family[0], ages[0], family[1], ages[1], family[2], ages[2], family[3], ages[3])

print(full_sentence)

print("  ")

print("and this is after 10 years: ")

print("  ")

for i in range(len(ages)):
    ages[i] += 10

full_sentence_2 = "My dad's name is: {}, and he will be {} years old, My mom's name is: {} and she will be {} years old, My name is: {} and I will be {} years old, my sister's name is: {} and she will be {} years old".format(family[0], ages[0], family[1], ages[1], family[2], ages[2], family[3], ages[3])

print(full_sentence_2)