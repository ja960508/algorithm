def solution(priorities, location):
    from collections import deque

    answer = 0
    priorities = deque(priorities)
    m = max(priorities)

    while True:
        popped = priorities.popleft()
        if m == popped:
            answer += 1
            if location == 0:
                break
            else:
                location -= 1
            m = max(priorities)
        else:
            priorities.append(popped)
            if location == 0:
                location = len(priorities) - 1
            else:
                location -= 1

    return answer


if __name__ == "__main__":
    numbers = list(int(input()) for i in range(4))
    location = int(input())
    print(solution(numbers, location))