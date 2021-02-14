"use strict";

class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(node) {
    this.graph[node] = [];
  }

  addEdge(fromNode, toNode) {
    this.graph[fromNode].push(toNode);
    this.graph[toNode].push(fromNode);
  }

  contain(fromNode, toNode) {
    let result;

    this.graph[fromNode].includes(toNode) &&
    this.graph[toNode].includes(fromNode)
      ? (result = true)
      : (result = false);

    return result;
  }

  print() {
    for (let key in this.graph) {
      console.log(`${key} : ${this.graph[key]}`);
    }
  }

  BFS(node) {
    let temp;
    const visitedQueue = [];
    const readyQueue = [];
    readyQueue.push(node);

    while (readyQueue.length > 0) {
      temp = readyQueue.shift();
      if (!visitedQueue.includes(temp)) {
        console.log(temp);
        visitedQueue.push(temp);
        for (let node of this.graph[temp]) {
          readyQueue.push(node);
        }
      }
    }

    console.log(visitedQueue);
  }

  DFS(node) {
    let temp;
    const visitedQueue = [];
    const readyQueue = [];
    readyQueue.push(node);

    while (readyQueue.length > 0) {
      temp = readyQueue.pop();
      if (!visitedQueue.includes(temp)) {
        console.log(temp);
        visitedQueue.push(temp);
        for (let node of this.graph[temp]) {
          readyQueue.push(node);
        }
      }
    }

    console.log(visitedQueue);
  }
}

const myGraph = new Graph();
myGraph.addNode("A");
myGraph.addNode("B");
myGraph.addNode("C");
myGraph.addNode("D");
myGraph.addNode("E");
myGraph.addNode("F");
myGraph.addNode("G");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "C");
myGraph.addEdge("D", "B");
myGraph.addEdge("E", "C");
myGraph.addEdge("E", "F");
myGraph.addEdge("F", "G");

myGraph.BFS("A");
myGraph.DFS("A");
