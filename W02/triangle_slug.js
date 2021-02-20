"use strict";

function solution(n) {
  let answer = [];
  let result = [];
  let rowCounter = 0;
  let triangleSide = 0;
  let startRow = 0;
  let startColumnCounter = 0;
  let endColumnCounter = 0;
  let endRow = n - 1;
  let counter = 1;

  for (let i = 0; i < n; i++) {
    answer.push(new Array(i + 1));
  }

  while (rowCounter < n) {
    switch (triangleSide % 3) {
      case 0:
        for (let i = startRow; i <= endRow; i++) {
          answer[i][startColumnCounter] = counter++;
        }

        startColumnCounter++;
        startRow++;
        triangleSide++;
        break;
      case 1:
        for (let i = startColumnCounter; i <= endRow - endColumnCounter; i++) {
          answer[endRow][i] = counter++;
        }
        endRow--;
        triangleSide++;
        break;
      case 2:
        for (let i = endRow; i >= startRow; i--) {
          answer[i][i - endColumnCounter] = counter++;
        }
        endColumnCounter++;
        startRow++;
        triangleSide++;
        break;
    }

    rowCounter++;
  }

  result = answer.reduce((result, row) => {
    return [...result, ...row];
  }, []);

  return result;
}

console.log(solution(8));
