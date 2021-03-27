def solution(number):
    answer = ""

    while number > 0:
        number -= 1
        answer = "124"[number % 3] + answer
        number //= 3

    return answer


if __name__ == "__main__":
    x = 5
    y = -5
    x, y = (y, x)[::-1]

    print(y, x)