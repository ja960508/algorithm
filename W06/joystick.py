def solution(name):
    name = list(name)
    answer = 0
    i = 0

    while True:
        answer += min(ord(name[i]) - ord("A"), ord("Z") - ord(name[i]) + 1)
        name[i] = "A"
        # 현재 인덱스의 문자를 A로 변환하고 그 차이만큼 answer에 더하기

        if name.count("A") == len(name):
            return answer
        # 모두 A로 변했다면 종료

        left, right = 1, 1
        for l in range(1, len(name)):
            if name[i - l] == "A":
                left += 1
            else:
                break
        # 오른쪽 타겟의 인덱스 차이 계산

        for r in range(1, len(name)):
            if name[i + r] == "A":
                right += 1
            else:
                break
        # 왼쪽 타겟의 인덱스 차이 계산

        if left < right:
            answer += left
            i -= left
        else:
            answer += right
            i += right
        # 오른쪽과 왼쪽의 차이를 비교하고 answer +


if __name__ == "__main__":
    name = input()
    print(solution(name))
