def solution(bridgeLength, weight, truckList):
    bridge = [0 for i in range(bridgeLength)]
    counter = 0

    while bridge:
        counter += 1
        bridge.pop(0)

        if truckList:
            if sum(bridge) + truckList[0] <= weight:
                bridge.append(truckList.pop(0))
            else:
                bridge.append(0)

    return counter


if __name__ == "__main__":
    bridgeLength = int(input("bridge : "))
    weight = int(input("weight: "))
    truckList = list(int(input()) for i in range(4))
    print(solution(bridgeLength, weight, truckList))