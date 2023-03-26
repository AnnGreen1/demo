const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  line = await readline();

  let len = parseInt(line.split(" ")[0]);
  let times = parseInt(line.split(" ")[0]);
  let arr = new Array(len).fill(undefined);
  let front =0;
  let rear = 0;
  console.log(arr);
  while (times > 0) {
    line = await readline();
    let tokens = line.split(" ");
    let a = tokens[0];
    let b = parseInt(tokens[1]);
    // console.log(a + b);
    switch (a) {
      case "push":
        arr.push(b);
        break;
      case "pop":
        arr.length == 0 ? console.log("error") : console.log(arr.shift());;
        break;
      case "front":
        arr.length == 0 ? console.log("error") : console.log(arr[0]);
      //   default:
      //   // 与 case 1 和 case 2 不同时执行的代码
    }
    times--;
    // console.log(arr);
  }
})();
