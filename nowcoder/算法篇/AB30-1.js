/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort( arr ) {
    // write code here
    return arr.sort((a,b) => a-b)
}
module.exports = {
    MySort : MySort
};