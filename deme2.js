/**
 * @description: 寻找和最大子序列，非0
 * @param {*} arr 
 * @returns 
 */
function findarr(arr){
    let darr = arr.includes(item => item < 0);
    if(darr.length>=0) return 0;

    let p = 0;
    let sum = 0;
    let times = 0;
    for(times=0;times<arr.length;times++){
        
        sum+=arr[times];
    }
}
findarr([1,-2,3,5,6,0,7-1,2])