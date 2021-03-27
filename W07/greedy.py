def get_coins(money):
    coins = [500, 100, 50, 1]
    paid_coin = list()

    for coin in coins:
        coin_num = money // coin
        paid_coin.append(coin_num)
        money -= coin_num * coin

    return paid_coin


def fractional_knapsack(data_list, weight):
    data_list = sorted(data_list, key=lambda x: x[1] / x[0], reverse=True)
    total_value = 0
    details = list()

    for data in data_list:
        if weight - data[0] >= 0:
            weight -= data[0]
            total_value += data[1]
            details.append([data[0], data[1], 1])
        else:
            fraction = weight / data[0]
            total_value += data[1] * fraction
            details.append([data[0], data[1], fraction])
            break

    return total_value, details


print(get_coins(4720))
data_list = [(10, 10), (15, 12), (20, 10), (25, 8), (30, 5)]

print(fractional_knapsack(data_list, 30))
