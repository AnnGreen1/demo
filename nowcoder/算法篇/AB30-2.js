/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */

/**
 * @description: 直接插入排序
 */
function changearr(arr, index, value){

}
let sortarr = [];
function MySort( arr ) {
    // write code here
    sortarr[0] = arr[0];
    // let i = 0;
    let j =0;
    for(j=0;j<arr.length;j++){
        for(i in sortarr){
            console.log(sortarr[i],arr[j],sortarr[i+1]);
            if(sortarr[i]<arr[j] && arr[j]<sort[i+1])
            {
                sortarr.splice(i,1,arr[j])
            }
        }
        console.log(sortarr);
    }
    console.log(sortarr)
}

MySort([5, 2, 3, 1, 4])