// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  // while(line = await readline()){
  //     let tokens = line.split(' ');
  //     let a = parseInt(tokens[0]);
  //     let b = parseInt(tokens[1]);
  //     console.log(a);
  //     console.log(b);
  // }
  let len1 = 0;
  let k1 = 0;
  let len2 = 0;
  let k2 = 0;
  let line = await readline();
  let tokens = line.split(" ");
  len1 = parseInt(tokens[0]);
  k1 = parseInt(tokens[1]);
  len2 = parseInt(tokens[2]);
  k2 = parseInt(tokens[3]);
  line = await readline();
  let num1='';
  let num2 = '';
  tokens = line.split(" ");
  num1 = tokens[0];
  line = await readline();
  tokens = line.split(" ");
  num2 = tokens[0];
//   console.log(len1,k1,len2,k2);
//   console.log(parseInt(3,2))
    let ten1 = 0;
    let i = 0;
    for(i=0;i<len1;i++){
        console.log(parseInt(num1[num1.length-i]));
        ten1+=Math.pow(k1,i)*parseInt(num1[num1.length-i-1]);
    }
    let ten2 = 0;
    i=0;
    for(i=0;i<len2;i++){
        ten2+=Math.pow(k2,i)*parseInt(num2[num2.length-i-1]);
    }
    // console.log(ten1,ten2);
    if(ten1 == ten2 )console.log('=')
    console.log(ten1 > ten2 ? '<' : '>')
})();
