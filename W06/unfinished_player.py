def solution(participant, completion):
    dic = {}

    for part in participant:
        if part in dic:
            dic[part] += 1
        else:
            dic[part] = 1

    for comp in completion:
        dic[comp] -= 1
        if dic[comp] == 0:
            del dic[comp]

    return list(dic.keys())[0]


if __name__ == "__main__":
    participant = input().split()
    completion = input().split()
    print(solution(participant, completion))