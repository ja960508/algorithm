"use strict";

const numbers = [0, 0];

function solution(numbers) {
  let result = "";
  const numberString = numbers.map((data) => data.toString());
  numberString.sort((a, b) => {
    return b + a - (a + b);
  });

  numberString.map((data) => {
    result = result + data;
    return;
  });
  if (result.split("")[0] == 0) result = `0`;
  return result;
}

console.log(solution(numbers));
