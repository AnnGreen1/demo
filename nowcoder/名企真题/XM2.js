/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param m int整型
 * @param n int整型
 * @return int整型
 */
function countBitDiff(m, n) {
  // write code here
  let maxlen =
    m.toString(2).length > n.toString(2).length
      ? m.toString(2).length
      : n.toString(2).length;
  let binarym = m.toString(2).padStart(maxlen, "0");
  let binaryn = n.toString(2).padStart(maxlen, "0");
  let flag = 0;
  let i = 0;
  while (i <= binarym.length) {
    if (binarym[i] != binaryn[i]) flag++;
    i++;
  }
  return flag;
}

countBitDiff(0, 2147483647);
