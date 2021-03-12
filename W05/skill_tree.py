def solution(skill, skill_trees):
    answer = 0

    for skills in skill_trees:
        skill_list = list(skill)

        for s in skills:
            if s in skill:
                if s != skill_list.pop(0):
                    break
        else:
            answer += 1

    return answer


if __name__ == "__main__":
    skill = input("스킬: ")
    skill_trees = input("스킬트리: ").split()

    print(solution(skill, skill_trees))