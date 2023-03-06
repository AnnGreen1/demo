/**
 * @address https://www.nowcoder.com/practice/104ce248c2f04cfb986b92d0548cccbf
 * @description 
 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
let arr = [];
function fun(arr, op, pa) {
//   console.log(op, pa);

  // if (typeof op == "number") {
  //     arr.push(op);
  //     console.log(arr)
  //     return
  // }
  if (op == "push") {
    arr.push(pa);
    // console.log('push',arr);
  }

  if (op == "pop") {
    if (arr.length == 0) {
      console.log("error");
    } else {
      //   console.log('pop',arr);
      console.log(arr.pop());
      //   console.log('pop',arr);
    }
  }

  if (op == "top") {
    if (arr.length == 0) {
      console.log("error");
    } else {
      console.log(arr[arr.length - 1]);
    }
  }
  //   console.log('end',arr);
  return arr;
}

void (async function () {
  // Write your code here
  line = await readline();
  let tokens = line.split(" ");
  let times = parseInt(tokens[0]);
  while (times) {
    line = await readline();
    let tokens = line.split(" ");
    let a = tokens[0];
    let b = tokens[1];

    // console.log(a + "" + b);
    // if (times == 0 ) {
    //   times = parseInt(a);
    // } else {
    fun(arr, a, b);

    times--;
  }
})();
