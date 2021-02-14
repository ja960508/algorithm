"use strict";

const skill = "CBD";
const skill_tree = ["BACDE", "CBADF", "AECB", "BDA"];

function solution(skill, skill_tree) {
  const skillArr = skill.split(""); // skill
  let temp, flag;
  let result = 0;

  for (let item of skill_tree) {
    flag = true;
    temp = item.split("").filter((data) => skillArr.includes(data));

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== skillArr[i]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result++;
    }
  }

  return result;
}

console.log(solution(skill, skill_tree));
