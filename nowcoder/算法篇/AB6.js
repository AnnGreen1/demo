const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  line = await readline();
  let arr = [];
  let flag = [];
  for (item of line) {
    if (item == "(") {
      flag.push("(");
      arr.push(item);
    } else if (item == ")") {
      flag.push(")");
      arr.push(item);
    } else {
      arr.push(item);
    }
    if (flag[flag.length - 1] == ")" && flag[flag.length - 2] == "(") {
      arr.pop();
      let num1 = arr.pop();
      let op = arr.pop();
      let num2 = arr.pop();
      console.log("num2 op num1", num2, op, num1);
      let res = 0;
      switch (op) {
        case "+":
          res = parseInt(num2) + parseInt(num1);
          break;
        case "-":
          res = parseInt(num2) - parseInt(num1);
          break;
        case "*":
          res = parseInt(num2) * parseInt(num1);
          break;
        case "/":
          res = parseInt(num2) / parseInt(num1);
          break;
        default:
          console.log("error");
      }
      console.log(res);
      arr.pop();
      flag.pop();
      flag.pop();
      arr.push(res);
      console.log(arr);
    }
  }
  console.log(arr);
  let i = 0;
  while (arr.includes("*") || arr.includes("/")) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == "*" || arr[i] == "/") {
        let res =
          arr[i] == "*" ? arr[i - 1] * arr[i + 1] : arr[i - 1] / arr[i + 1];
        arr.splice(i - 1, 3, res);
      }
    }
  }
i=0;
let sum = parseInt(arr[0]);
  for(i=1;i<arr.length;i++){
    if(arr[i]== '+'){
        sum += parseInt(arr[i+1]);
    }else if(arr[i] == '-'){
        sum-=parseInt(arr[i+1]);
    }else{
        continue;
    }
  }

  console.log(arr);
  console.log(sum);
})();
