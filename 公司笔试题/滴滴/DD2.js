const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline();
    let arr = [];
    for(item of line){
        if(arr.length>0){
            if(arr[arr.length-1] == item){
                arr.pop()
            }else{
                arr.push(item)
            }
        }else{
            arr.push(item)
        }
    }
     console.log(arr.length == 0 ? 0 : arr.join(''))
}()


m1+m2+m3... = n

时间限制： 3000MS
内存限制： 589824KB
题目描述：
       小明正在进行积木的分销。他一共有N个积木，他要将它们分装到M个小包装内，每个小包装内至少有一个。如果一个小包装内含x个积木，那么这个小包装将会被定价为X2。小明想要控制一下价格，不希望价格太贵或者太便宜。他想要知道是否存在一种分装方案，使得分装后的M个小包装定价之和恰好为P。

       如果有多种方案，输出字典序最小的那一个。对于两种不同方案{a1,a2,...,aM}与{b1,b2,...,bM}，若对于1≤i≤t的i均有ai=bi，且at+1＜bt+1，那么认为方案a的字典序小于方案b。

注意：当t=0时，没有合法的i存在，1≤i≤t只是限制i的范围。

例如，对于M=3,N=4的情况下，{1,1,2}的字典序小于{2,1,1} (对应t=0的情况) 、{1,2,1} (对应t=1的情况)。



输入描述
第一行三个正整数N,M,P，含义如题面。

对于所有数据，1≤M≤N≤12；0≤P≤109

输出描述
若不存在任何方案，输出-1，否则输出M个数表示每个小包装内应分的的积木数量。


样例输入
4 3 6
样例输出
1 1 2

提示
输入样例2

4 3 5

 

输出样例2

-1

 

样例解释2

不存在方案使得分割后价格和为5

规则
请尽量在全场考试结束10分钟前调试程序，否则由于密集排队提交，可能查询不到编译结果
点击“调试”亦可保存代码
编程题可以使用本地编译器，此页面不记录跳出次数
