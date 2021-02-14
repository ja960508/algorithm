"use strict";

const arr = [
  5,
  6,
  7,
  8,
  8,
  12,
  3,
  4,
  5,
  6,
  7,
  2323,
  4,
  455,
  6,
  12,
  21,
  412,
  435,
  35,
  3426,
  346,
  346,
  3473,
  7,
  1,
];

function qsort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = new Array(1).fill(arr[0]);
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot <= arr[i]) right.push(arr[i]);
    else left.push(arr[i]);
  }

  return qsort(left).concat(pivot.concat(qsort(right)));
}

console.log(qsort(arr));
