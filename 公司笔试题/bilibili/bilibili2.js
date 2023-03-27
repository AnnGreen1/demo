/**
 * @param num 有多少道菜
 * @param maxprice 不超过这个价格
 * @todo 点菜只有一个价格（点得每道菜价格必须相同），求在不超过给出价格的情况下最多能点多少道菜
 */
/*
输入
9 6
2 3 3 6 6 6 9 9 23
输出
6
解释
在不超过6的价格下只能点价格为2 3 6的菜，最多能点3道为价格6的菜
*/
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let line = await readline();
    let tokens = line.split(' ');
    let num = parseInt(tokens[0]);
    let maxprice = parseInt(tokens[1]);
    // console.log(num);
    // console.log(maxprice);
    let dish = [];
    line = await readline();
    tokens = line.split(' ');
    tokens.forEach(element => {
        dish.push(parseInt(element))
    });
    let res = dish.filter(item=>item<=maxprice);
    let temp = res;
    let pricearr = [...new Set(temp)];
    let numarr = new Array(10).fill(0);
    res.forEach(item=>{
        for(i = 0;i<pricearr.length;i++){
            if(item==pricearr[i]) numarr[i]+=1;
        }
    })
    let index = 0;
    let max = 0;
    for(j=0;j<numarr.length;j++){
        if(numarr[j]>=max){
            index = j;
            max = numarr[j];
        }
    }
    console.log(pricearr[index]);
}()