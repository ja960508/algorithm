def solution(numbers):
    answer = []

    for i in range(0, len(numbers)):
        for j in range(i + 1, len(numbers)):
            answer.append(numbers[i] + numbers[j])

    answer = set(answer)
    answer = list(answer)
    answer.sort()

    return answer


if __name__ == "__main__":
    arr = list(map(int, input().split()))
    print(solution(arr))