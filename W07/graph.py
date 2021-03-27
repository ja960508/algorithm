def BFS(graph, start_node):
    visited = list()
    need_to_visited = list()

    need_to_visited.append(start_node)

    while need_to_visited:
        node = need_to_visited.pop(0)
        if node not in visited:
            visited.append(node)
            need_to_visited.extend(graph[node])

    return visited


graph = dict()
graph["A"] = ["B", "C"]
graph["B"] = ["A", "D"]
graph["C"] = ["A", "G", "H", "I"]
graph["D"] = ["B", "E", "F"]
graph["E"] = ["D"]
graph["F"] = ["D"]
graph["G"] = ["C"]
graph["H"] = ["C"]
graph["I"] = ["C", "J"]
graph["J"] = ["I"]

print(BFS(graph, "A"))
