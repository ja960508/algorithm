"use strict";

let str0 = "level";
let str1 = "hello";

function check(str) {
  if (str.length === 1) return true;

  if (str[0] !== str[str.length - 1]) return false;
  else return check(str.slice(1, str.length - 1));

  // for (let i = 0; i < str.length / 2; i++) {
  //   if (str[i] !== str[str.length - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
}

console.log(check(str0));
