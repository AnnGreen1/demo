const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    

    line = await readline();
    let tokens = line.split(" ");
    let num1 = parseInt(tokens[0]);
    let num2 = parseInt(tokens[1]);


    console.log(num1 + num2);
}()