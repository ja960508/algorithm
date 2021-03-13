def solution(n):
    storage = [[0] * i for i in range(1, n + 1)]
    num = 1
    col = 0
    row = 0
    answer = []

    # counter to draw slug
    for time in range(0, n):
        # down
        if time % 3 == 0:
            for _ in range(0, n - time):
                storage[row][col] = num
                num += 1
                row += 1
            row -= 1
            col += 1
        # right
        elif time % 3 == 1:
            for _ in range(0, n - time):
                storage[row][col] = num
                num += 1
                col += 1
            row -= 1
            # upper row column
            col -= 2
        # up
        elif time % 3 == 2:
            for _ in range(0, n - time):
                storage[row][col] = num
                num += 1
                row -= 1
                col -= 1
            col += 1
            row += 2

    answer = [num for row in storage for num in row]

    return answer


if __name__ == "__main__":
    n = int(input())
    print(solution(n))