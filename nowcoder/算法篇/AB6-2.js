/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */
function solve( s ) {//递归会出现深浅拷贝的问题，每次重新调用所有同名变量将改变
    // write code here
    let stack=[]
    let sign='+'
    let i=0
    let num=0
    while(i<s.length){
        if(s[i]=='('){
            let flag=1,star=i+1
            while(flag>0){
                i++;
                if(s[i]=='('){flag++;}
                if(s[i]==')'){flag--;}
            }
            let end=i
            let arr=s.slice(star,i)
            num=solve(arr)//
            i=end
        }
        else if(s[i]>='0'&&s[i]<='9'){
            num=num*10+Number(s[i])
        }
        if(s[i]<'0'||s[i]>'9'||i==s.length-1){
            //if(i==s.length-1){stack.push(num);}
            if(sign=='+'){stack.push(num);}
            if(sign=='-'){stack.push(num*(-1));}
            if(sign=='*'){stack.push(stack.pop()*num);}
            sign=s[i]
            num=0
        }
        i++;
    }
    return stack.reduce(function(a,b){
        return a+b;
    })
}
module.exports = {
    solve : solve
};