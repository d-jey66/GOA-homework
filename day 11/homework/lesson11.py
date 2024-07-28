def check_triangle(side1, side2, side3):
    if side1 + side2 > side3 and side1 + side3 > side2 and side2 + side3 > side1:
        print("ასეთი სამკუთხედი იარსებებს")
    else:
        print("ასეთი სამკუთხედი ვერ იარსებებს")

check_triangle(3, 4, 5)  
check_triangle(1, 2, 4)  