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
    // console.log(item);
    temp = item + temp;
  }
  if (parseInt(temp) > Math.pow(2, 31) - 1 || parseInt(temp) < -Math.pow(2, 31))
    temp = 0;
  return flag == 0 ? parseInt(temp) : -1 * parseInt(temp);
};
