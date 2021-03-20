def solution(scoville, k):
    import heapq

    data = []
    answer = 0

    for s in scoville:
        heapq.heappush(data, s)

    while len(data) > 0:
        if data[0] > k:
            return answer

        a = heapq.heappop(data)
        if data != []:
            b = heapq.heappop(data)
            heapq.heappush(data, a + (b * 2))
        answer += 1

    return -1


if __name__ == "__main__":
    scoville = list(map(int, input().split()))
    k = int(input())
    print(solution(scoville, k))