"use strict";

const arr = [5, 6, 34, 2, 133, 45, 676, 886, 5, 66, 7];

function swap(arr, currentIndex, targetIndex) {
  let temp = arr[currentIndex];
  arr[currentIndex] = arr[targetIndex];
  arr[targetIndex] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] <= arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
}

console.log(arr);
insertionSort(arr);
console.log(arr);
