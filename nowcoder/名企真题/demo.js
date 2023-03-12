const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let n = 0;
    while(line = await readline()){
        let tokens = line.split(' ');
        n = parseInt(tokens[0]);
    }
    let arr = [1,1];
    let i = 0;
    if(n==0 || n==1){
        console.log(arr[n])
        return
    }
    for(i=0;i>=0;i++){
        if((arr.length-1)!=n){
            arr.push(arr[arr.length-1]+arr[arr.length-2])
        }else{
            break;
        }
        console.log(arr);
    }
    console.log(arr[arr.length-1])
}()
