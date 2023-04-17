/**
 * @description 把二维数组的二分查找转换为一个一维数组的二分查找
 * @param {Array} nums 
 * @param {Number} target 
 * @returns {Boolean}
 */
function Find( nums ,  target ) {
    // write code here
    nums = nums.flat();
    nums = nums.sort((a,b) => a - b)
    let low = 0;
    let high = nums.length;
    let mid = parseInt((low+high)/2);
    while(true){
        if(low>high) return false;
        if(target == nums[mid]){
            // console.log(mid)
            return true;
        }else if(target < nums[mid]){
            high=mid-1;
            mid = parseInt((low+high)/2);
        }else{
            low = mid + 1;
            mid = parseInt((low+high)/2);
        }
    }
}
// module.exports = {
//     Find : Find
// };
let res = Find([[2]],1);
console.log(res);
res = Find([[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]],3);
console.log(res);
res = Find([[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]],7);
console.log(res);