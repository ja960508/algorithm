"use strict";

const arr = [5, 6, 34, 2, 133, 45, 676, 886, 5, 66, 7];

function swap(arr, currentIndex, targetIndex) {
  let temp = arr[currentIndex];
  arr[currentIndex] = arr[targetIndex];
  arr[targetIndex] = temp;
}

function selectionSort(arr) {
  let targetIndex;
  let minimumValue;

  for (let i = 0; i < arr.length - 1; i++) {
    minimumValue = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (minimumValue >= arr[j]) {
        targetIndex = j;
        minimumValue = arr[j];
      }
    }
    swap(arr, i, targetIndex);
  }
}

console.log(arr);
selectionSort(arr);
console.log(arr);
