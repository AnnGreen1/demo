const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function solve(s) {
  // write code here
  let ops = []; // 用来存储运算符
  let nums = []; // 用来存储数值和每次计算的结果
  //   console.log(isNaN(parseInt(s[0])));
  for (let i = 0; i < s.length; i++) {
    if ("(*".indexOf(s[i]) > -1) {
      // 判断 s[i] 是否为  ( 和 *
      ops.push(s[i]); // 是就入栈
    } else if (!isNaN(s[i])) {
      // 判断是否为 一个数字 ->number
      let temp = ""; // 临时变量
      while (i < s.length && !isNaN(s[i])) {
        temp = temp + s[i++]; // 因为 s 给的是一个字符串 所以通过这个办法 可以把 两位数的数字拼在一起
      }
      i--; // 如果 s[0] 和 s[1] 是一个操作数值12 经过上面的操作拼完了之后 i 会等于2 所以这里等让 i - 1 变回1 指向s[1]
      nums.push(parseInt(temp)); // 随后入栈
    } else if (s[i] == "+" || s[i] == "-") {
      // 如果是加号 或者 减号
      while (ops.length > 0 && "*+-".indexOf(ops[ops.length - 1]) > -1) {
        // 就将 ops数组里
        //的  * + - 等运算符 pop 出去进行操作
        let num1 = nums.pop();
        let num2 = nums.pop();
        let res = calc(ops.pop(), num1, num2); // 加减乘 操作函数 在下面
        nums.push(res); // 将得出的结果入栈  ,  如果你有疑问， 为什么最后栈中的就一顶只有结果，没有别的操作数字， 因为
        // 上面 num1 和 num2 赋值的时候 都 pop出去了
      }
      ops.push(s[i]); // 最后将 此次遇到的 + 号丢进栈里
    } else if (s[i] == ")") {
      // 如果遇到 )
      while (ops.length > 0 && ops[ops.length - 1] != "(") {
        // 只要栈不空， 和不遇到 (
        // 就一直循环
        let num1 = nums.pop();
        let num2 = nums.pop();
        let res = calc(ops.pop(), num1, num2); // 思想和上面一样
        nums.push(res); // 结果入栈
      }
      ops.pop(); // 把左括号丢出去
    }
  }
  while (ops.length > 0) {
    // 最后 ops 不空 不停
    let num1 = nums.pop();
    let num2 = nums.pop();
    let temp_res = calc(ops.pop(), num1, num2);
    nums.push(temp_res); // 最后的结果 丢进去
  }
  return nums.pop(); // 最后的结果 return 出去
}

function calc(op, b, a) {
  if (op == "+") return a + b;
  if (op == "-") return a - b;
  if (op == "*") return a * b;
  return 0;
}

void (async function () {
  // Write your code here
  line = await readline();
  console.log(solve(line));
})();

module.exports = {
  solve: solve,
};
