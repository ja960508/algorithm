"use strict";

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
  let answer = [];
  let publishedFunc;

  while (progresses.length > 0) {
    publishedFunc = 0;
    progresses = progresses.map((data, index) => {
      return (data += speeds[index]);
    });
    console.log(progresses);

    while (progresses[0] >= 100) {
      publishedFunc++;
      progresses.shift();
      speeds.shift();
    }

    publishedFunc && answer.push(publishedFunc);
  }

  return answer;
}

solution(progresses, speeds);
