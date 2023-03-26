const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function calc(num1, op, num2){
    // num1 op calc(num2,op,num3)
    

}

void (async function () {
  // Write your code here
  line = await readline();
  let arr = [];
  let flag = [];
  for (item of line) {
  }
})();
