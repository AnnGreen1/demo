// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let peachNum = 0;
    let s = [];
    let t = [];
    let i = 0;
    while(line = await readline()){
        let tokens = line.split(' ');
        if(i==0){
            peachNum = parseInt(tokens[0]);
        }else if(i==1){
            s = tokens;
        }else{
            t = tokens;
        }
        i++;
    }
//     console.log(peachNum);
//     console.log(t);
//     console.log(s);
    tt = 1;
    let j = 0;
    for(j=0;j<peachNum;j++){
        if(parseInt(s[j])>parseInt(t[j])){
            tt*=parseInt(s[j]);
        }else{
            tt*=parseInt(t[j]);
        }
    }
    console.log(tt%(1000000000+7))
}()