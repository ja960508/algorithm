"use strict";

function solution(n) {
  let answer = "";
  let numberArr = [];
  let share = n;
  let reminder = 0;

  while (share > 0) {
    reminder = share % 3;
    share = parseInt(share / 3);

    if (reminder === 0) {
      share--;
      reminder = 4;
    }
    numberArr.push(reminder);
  }

  answer = numberArr.reverse().join("");
  return answer;
}

console.log(solution(15));
