def solution(array, commands):
    answer = []

    for com in commands:
        temp = array[com[0] - 1 : com[1]]
        temp.sort()
        answer.append(temp[com[2] - 1])

    return answer


if __name__ == "__main__":
    array = list(map(int, input().split()))
    commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
    print(solution(array, commands))
