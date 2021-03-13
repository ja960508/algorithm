def solution(progresses, speeds):
    print(progresses, speeds)
    answer = []
    return answer


if __name__ == "__main__":
    progresses = list(input().split())
    progresses = list(map(int, progresses))
    speeds = list(input().split())
    speeds = list(map(int, speeds))
    print(solution(progresses, speeds))