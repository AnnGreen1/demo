/**
 * @description 把二维数组的二分查找转化为多个一维数组二分查找
 * @param {Array} nums
 * @param {Number} target
 * @returns {Boolean}
 */
function Find(nums, target) {
  // write code here
  let flag = -1;
  nums.forEach((item) => {
    let low = 0;
    let high = item.length;
    let mid = parseInt((low + high) / 2);
    while (true) {
      if (low > high) break;
      if (target == item[mid]) {
        // console.log(mid)
        flag = true
      } else if (target < item[mid]) {
        high = mid - 1;
        mid = parseInt((low + high) / 2);
      } else {
        low = mid + 1;
        mid = parseInt((low + high) / 2);
      }
    }
  });
  return flag;
}
// module.exports = {
//     Find : Find
// };
let res = Find([[2]], 1);
console.log(res);
res = Find(
  [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ],
  3
);
console.log(res);
res = Find(
  [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ],
  7
);
console.log(res);
