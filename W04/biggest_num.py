def solution(numbers):
    numbers = list(map(str, numbers))
    numbers.sort(key=lambda x: x * 3, reverse=True)
    numbers = str(int("".join(numbers)))

    return numbers


if __name__ == "__main__":
    numbers = list(int(input()) for i in range(4))
    print(solution(numbers))