def find_maximum(arr):
    if len(arr) != 5:
        raise ValueError("The array must contain exactly 5 elements")
    maximum = arr[0]
    for num in arr:
        if num > maximum:
            maximum = num
    return maximum

arr = [12, 45, 32, 11, 67]
print("მაქსიმუმი:", find_maximum(arr))
