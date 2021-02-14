"use strict";

class Node {
  constructor(data) {
    this.data = data;
  }
}

class Heap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);

    if (this.heap.length !== 0) this.alignHeap();
  }

  alignHeap() {
    let currIndex = this.heap.length - 1;

    while (currIndex > 0) {
      let currentValue = this.heap[currIndex];
      let parentIndex = Math.floor((currIndex - 1) / 2);
      let parentValue = this.heap[parentIndex];

      if (currentValue >= parentValue) {
        this.heap[currIndex] = parentValue;
        this.heap[parentIndex] = currentValue;
        currIndex = parentIndex;
      }
    }
  }

  popMaxValue() {
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return max;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    const length = this.heap.length;

    if (left <= length && this.heap[left] > this.heap[largest]) largest = left;
    if (right <= length && this.heap[right] > this.heap[largest])
      largest = right;

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];

      this.sinkDown(largest);
    }
  }
}

const heap = new Heap();

heap.insert(123);
heap.insert(124);
heap.insert(125);
heap.insert(126);
heap.insert(127);
heap.insert(137);
heap.insert(147);

console.log(heap);
