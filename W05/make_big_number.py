def solution(number, k):
    number = list(str(number))
    result = []

    for i, num in enumerate(number):
        while len(result) > 0 and result[-1] < num and k > 0:
            result.pop()
            k -= 1
        if k == 0:
            result += number[i:]
            break
        result.append(num)

    result = result[:-k] if k > 0 else result
    result = "".join(result)

    return result


if __name__ == "__main__":
    number = int(input("input: "))
    k = int(input("num of deleted number: "))
    print(solution(number, k))