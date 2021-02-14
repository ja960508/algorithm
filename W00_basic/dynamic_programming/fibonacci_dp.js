"use strict";

function fibo(num) {
  if (num <= 1) return num;
  return fibo(num - 1) + fibo(num - 2);
}

function fibo_dp(num) {
  let cache = Array(num).fill(0);
  cache[0] = 0;
  cache[1] = 1;

  for (let i = 2; i <= num; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[num];
}

console.log(fibo_dp(6));
