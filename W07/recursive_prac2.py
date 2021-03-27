def handling_number(num):
    print(num)
    if num == 1:
        return num
    if num % 2 == 1:
        return handling_number(3 * num + 1)
    else:
        return handling_number(num // 2)

def func(num):
    if num == 1:
        return 1
    elif num == 2:
        return 2
    elif num == 3:
        return 4
    
    return func(num - 1) + func(num - 2) + func(num - 3)

handling_number(3)
print(func(5))