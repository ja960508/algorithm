const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20];

function binarySearch(num, arr) {
  console.log(arr);
  console.log(num);
  if (arr.length === 1 && num !== arr[0]) {
    return false;
  }

  if (num > arr[parseInt(arr.length / 2)]) {
    return binarySearch(num, arr.slice(arr.length / 2, arr.length));
  } else if (num < arr[parseInt(arr.length / 2)]) {
    return binarySearch(num, arr.slice(0, arr.length / 2));
  } else {
    return true;
  }
}

console.log(binarySearch(0, arr));
