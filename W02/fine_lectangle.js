"use strict";

function solution(w, h) {
  let answer = 0;
  answer = w * h - (w + h - gcd(w, h));

  return answer;
}

function gcd(w, h) {
  const mod = w % h;

  if (mod === 0) {
    return h;
  } else {
    return gcd(h, mod);
  }
}

console.log(solution(3, 1));
