def solution(number):
    answer = ""

    while number > 0:
        number -= 1
        answer = "124"[number % 3] + answer
        number //= 3

    return answer


if __name__ == "__main__":
    number = int(input())
    print(solution(number))