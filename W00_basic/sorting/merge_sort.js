"use strict";

const arr = [4, 6, 4, 45, 6, 1, 23, 4, 5, 6, 2, 4, 3];

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let right = arr.slice(0, arr.length / 2);
  let left = arr.slice(arr.length / 2, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let tempArr = [];
  let lp = 0;
  let rp = 0;

  console.log(`left and right ${left}, ${right}`);

  while (left.length > lp && right.length > rp) {
    if (left[lp] > right[rp]) {
      tempArr.push(right[rp]);
      rp++;
    } else {
      tempArr.push(left[lp]);
      lp++;
    }
  }

  if (left.length > lp) {
    while (left.length > lp) {
      tempArr.push(left[lp]);
      lp++;
    }
  } else {
    while (right.length > rp) {
      tempArr.push(right[rp]);
      rp++;
    }
  }

  console.log(`temp : ${tempArr}`);
  return tempArr;
}

console.log(mergeSort(arr));
