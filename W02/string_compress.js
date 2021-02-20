"use strict";

function solution(s) {
  let answer = Infinity;
  let resultArr = [];

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    resultArr.push(i);
  }

  if (!resultArr.length) resultArr.push(1);

  for (let i = 1; i <= resultArr.length; i++) {
    let count = 1;
    let resultStr = "";

    for (let j = 0; j < s.length; j = j + i) {
      let currentStr = s.substr(j, i);
      let nextStr = s.substr(j + i, i);

      if (currentStr === nextStr) {
        count += 1;
      } else {
        if (count !== 1) {
          resultStr += `${count}${currentStr}`;
        } else {
          resultStr += `${currentStr}`;
        }

        count = 1;
      }
    }

    if (answer > resultStr.length) {
      answer = resultStr.length;
    }
  }

  return answer;
}

console.log(solution("a"));
