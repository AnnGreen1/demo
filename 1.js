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
    console.log(typeof peachNum);
    console.log(t);
    console.log(s);
    console.log();
    tt = 1;
    let j = 0;
    let maxs=0;
    let tag = 0;
    for(j=0;j<peachNum;j++){
        if(maxs<parseInt(s[j])) 
        {
            maxs =parseInt(s[j])
            tag = j;
        }
        // if(parseInt(s[j])>parseInt(t[j])){
        //     tt*=parseInt(s[j]);
        // }else{
        //     tt*=parseInt(t[j]);
        // }
    }
    console.log(maxs);
    let time = 0;

    for(time=0;time<peachNum;time++){
        if(time == tag){
            if(parseInt(s[time])>parseInt(t[time])){
                t[time] = parseInt(s[time]);
            }
        }
        tt*=parseInt(t[time]);
    }
    console.log(tt)
}()