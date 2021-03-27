def qsort(data):
    if len(data) <= 1:
        return data

    left, right = list(), list()
    pivot = data[0]

    for i in range(1, len(data)):
        if pivot > data[i]:
            left.append(data[i])
        else:
            right.append(data[i])

    return qsort(left) + [pivot] + qsort(right)

def qsort2(data):
    if len(data) <= 1:
        return data

    left, right = list(), list()
    pivot = data[0]

    left = [item for item in data[1:] if item < pivot]
    right = [item for item in data[1:] if item >= pivot]

    return qsort2(left) + [pivot] + qsort2(right)

data = [2,3,4,25,2,6,36,1,15,63,6,2,13]
print(qsort2(data))