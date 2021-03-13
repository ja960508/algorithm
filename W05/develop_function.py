def solution(progresses, speeds):
    answer = []
    time = 0
    count = 0

    while len(progresses) > 0:
        if (progresses[0] + time * speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:
                answer.append(count)
                count = 0
            time += 1
    answer.append(count)

    return answer


if __name__ == "__main__":
    progresses = list(input().split())
    progresses = list(map(int, progresses))
    speeds = list(input().split())
    speeds = list(map(int, speeds))
    print(solution(progresses, speeds))