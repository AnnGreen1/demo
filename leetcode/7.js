const { type } = require("os");

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let flag = x > 0 ? 0 : 1;
  x = x > 0 ? x : -x;
  let temp = "";
  str = x.toString();
  for (item of str) {
    console.log(item);
    temp = item + temp;
  }
  return flag == 0 ? parseInt(temp) : -1 * parseInt(temp);
};

console.log(reverse(123));
