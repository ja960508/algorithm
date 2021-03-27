def multiple(num):
    return_value = 1
    for i in range(2, num + 1):
        return_value *= i

    print(return_value)


def multiple_recursive(num):
    if num <= 1:
        return num
    return num * multiple_recursive(num - 1)


multiple(10)
print(multiple_recursive(10))


def palindrome(str):
    reverse_str = str[::-1]

    for i in range(len(str)):
        if str[i] != reverse_str[i]:
            return False

    return True


def palindrome_recursive(str):
    if len(str) <= 1:
        return True
    if str[0] == str[-1]:
        return palindrome_recursive(str[1:-1])
    else:
        return False


print(palindrome_recursive("abba"))
str1 = "ab"
print(str1[1:-1])