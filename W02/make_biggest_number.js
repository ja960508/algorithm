"use strict";

const number = "146256";

function solution(number, k) {
  let answer = "";
  let resultArr = [];
  let numberArr = number.split("");

  for (let i = 0; i < numberArr.length; i++) {
    while (resultArr.length > 0) {
      if (k === 0) break;
      if (resultArr[resultArr.length - 1] < number[i]) {
        resultArr.pop();
        k--;
      } else break;
    }

    resultArr.push(numberArr[i]);
  }

  if (k) {
    resultArr.splice(resultArr.length - k, k);
  }
  answer = resultArr.join("");
  return answer;
}

console.log(solution(number, 2));
