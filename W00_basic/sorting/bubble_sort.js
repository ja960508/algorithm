"use strict";

const arr = [5, 6, 34, 2, 133, 45, 676, 886, 5, 66, 7];

function swap(arr, index) {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - (1 + i); j++) {
    if (arr[j] > arr[j + 1]) {
      // let temp = arr[j];
      // arr[j] = arr[j + 1];
      // arr[j + 1] = temp;
      swap(arr, j);
    }
  }
}

console.log(arr);
