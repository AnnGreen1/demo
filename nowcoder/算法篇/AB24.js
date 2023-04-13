/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
function search( nums ,  target ) {
    // write code here
    let low = 0;
    let high = nums.length;
    let mid = parseInt((low+high)/2);
    while(true){
        if(low>high) return -1;
        if(target == nums[mid]){
            // console.log(mid)
            return mid;
        }else if(target < nums[mid]){
            high=mid-1;
            mid = parseInt((low+high)/2);
        }else{
            low = mid + 1;
            mid = parseInt((low+high)/2);
        }
    }
}
module.exports = {
    search : search
};