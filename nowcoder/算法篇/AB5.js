const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline();
    let arr = [];
    for(item of line){
        if(arr.length>0){
            if(arr[arr.length-1] == item){
                arr.pop()
            }else{
                arr.push(item)
            }
        }else{
            arr.push(item)
        }
    }
     console.log(arr.length == 0 ? 0 : arr.join(''))
}()
