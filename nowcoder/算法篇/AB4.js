/**
 * @address https://www.nowcoder.com/practice/885c1db3e39040cbae5cdf59fb0e9382
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param tokens string字符串一维数组 
 * @return int整型
 */
function evalRPN( tokens ) {
    // write code here
    // let op = [];
    let arr = [];
    // let temp = 0;
    for(item of tokens){
        if(!['+','-','*','/'].includes(item)){
            arr.push(parseInt(item))
        }else if(item == '+'){
            let x = arr.pop();
            let y = arr.pop();
            arr.push(x+y)
        }else if(item == '-'){
            let x = arr.pop();
            let y = arr.pop();
            arr.push(y-x)
        }else if(item == '*'){
            let x = arr.pop();
            let y = arr.pop();
            arr.push(y*x)
        }else{
            let x = arr.pop();
            let y = arr.pop();
            arr.push(parseInt(y/x))
        }
    }
return arr[0];

}
module.exports = {
    evalRPN : evalRPN
};