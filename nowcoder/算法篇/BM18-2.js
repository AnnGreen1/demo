/**
 * @description 遍历二维数组进行查找
 * @param {Array} nums 
 * @param {Number} target 
 * @returns {Boolean}
 */
function Find(target, array)
{
    // write code here
   let flag = false;
    array.forEach(element => {
        element.forEach(item => {
            if(item === target) flag = true  
        })
    });
    return flag
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