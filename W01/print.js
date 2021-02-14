"use strict";

const priorities = [2, 1, 3, 2];

function solution(priorities, location) {
  let answer = 0;
  let target = location;

  while (priorities.length > 0) {
    if (priorities.some((data) => priorities[0] < data)) {
      // when bigger value is in array
      // use some API => return boolean value
      priorities.push(priorities[0]);
      priorities.shift();

      if (target == 0) {
        target += priorities.length - 1; // relocate targetIndex
      } else {
        target -= 1;
      }
    } else {
      // when there is no bigger value in array
      answer++;
      if (target === 0) break;
      // if target is first one
      else target -= 1;

      priorities.shift();
    }
  }

  return answer;
}

console.log(solution(priorities, 0));
