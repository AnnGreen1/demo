const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let len = 0;
    let times = 0;
    let arr = [];

    line = await readline();
    let tokens = line.split(" ");
    len = parseInt(tokens[0]);
    times = parseInt(tokens[1]);

    line = await readline();
    tokens = line.split(" ");
    let i = 0;
    for(item of tokens){
        arr.push(parseInt(item))
    }

    console.log(len);
    console.log(times);
    console.log(arr)
    let keys = [];
    let values = [];
    // keys = new Set(arr);
    // console.log(keys)
    // console.log(new Array(keys));
    for(i=0;i<arr.length;i++){
        if(!keys.includes(arr[i])){
            keys.push(arr[i]);
            values[i]=0;
        } 
    }
    console.log(keys)
    
    for(i=0;i<arr.length;i++){
        for(let j =0;j<keys.length;j++){
            if(keys[j] == arr[i]) {
                // values
                values[j]++
            }
        }
    }
    console.log(values);
    let sum = 0;
    for(item of values){
        console.log(item)
        if(item>times){
            sum+=(item-times)
        }
    }
    console.log(sum)
}()