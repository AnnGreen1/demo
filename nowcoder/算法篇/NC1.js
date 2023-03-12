
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
// function solve( s ,  t ) {
//     // write code here
//     return (BigInt(s)+BigInt(t)).toString()
// }

// module.exports = {
//     solve : solve
// };

/**
 * 利用传统加法的方式
 */
function solve(s, t){
    // for(item of s){
    //     console.log(item[]);
    // }
    let i = 0;
    let jinwei = 0;
    let str='';
    let maxlen = s.length > t.length ? s.length : t.length;
    let j = 0;
    if(t.length < s.length){
        for(j = 0;j<s.length-t.length;j++){
            t = 0 + t;
        }
    }else{
        for(j = 0;j<t.length-s.length;j++){
            s = 0 + s;
        }
    }
    console.log(s);
    console.log(t);
    for(i = 1; i<=maxlen;i++){
        // console.log(s[s.length-i]);
        // console.log(t[t.length-i]);
        if(s[s.length-i] && t[t.length-i])
        {
            console.log(s[s.length-i]);
            console.log(t[t.length-i]);
            str =  (parseInt(s[s.length-i]) + parseInt(t[t.length-i]) + jinwei)%10 + str;
            console.log(str);
            jinwei = ((parseInt(s[s.length-i]) + parseInt(t[t.length-i])) + jinwei - (parseInt(s[s.length-i]) + parseInt(t[t.length-i]))%10)/10;
            console.log(jinwei)
            console.log('---------');
        }else{
            // if(s.length > t.length){
            //     str = (parseInt(s[s.length-i]) + jinwei)%10 +str;
            //     jinwei = (parseInt(s[s.length-i]) + jinwei)%10/10
            // }else{
            //     str = (parseInt(t[t.length-i]) + jinwei)%10 +str;
            //     jinwei = (parseInt(t[t.length-i]) + jinwei)%10/10
            // }
        }
    }
    console.log(jinwei+str);
    return jinwei+str;
}
// solve("11","99")



solve("1","99")