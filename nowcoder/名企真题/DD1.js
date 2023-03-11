const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let len = 0;
    let arr = [];
    let i = 0;
    while(line = await readline()){
        let tokens = line.split(' ')
        if(i == 0){
            len = parseInt(tokens[0])
        }else{
            arr = tokens.map(item => parseInt(item))
        }
        i++
    }
    console.log(len)
    console.log(arr)
    let max = 0;
}()
