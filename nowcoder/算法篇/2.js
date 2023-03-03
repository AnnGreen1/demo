// function IsPopOrder(pushV, popV)
// {
//     // write code here
//     // console.log(pushV)
//     let stack = [];
//     let i=0;
//     while(true){
        
//         console.log('stack[stack.length-1]',stack[stack.length-1]);
//         console.log('popV[i]',popV[i]);
        
//         if(stack[stack.length-1]!=popV[0])
//         {
            
//             console.log(pushV.length==0);
//             if(pushV.length==0){
//                 return false
//             }else{
//                 stack.push(pushV[0])
//                 pushV.shift()
                
//             }


//         }else{
//             stack.pop()
//             popV.shift()
//         }
//         console.log('pushV',pushV);
//         console.log('popV',popV);
//         console.log('stack',stack);
//         console.log('-----');
//         if(popV.length==0&&stack.length==0) {
//             return true;
//             // break;
//         }
//         // if()
//         i++;
//         // if(i==2) break;
//     }

// }
// IsPopOrder([1,2,3,4,5],[4,3,5,1,2])
// console.log(IsPopOrder([7,9,5,4,1],[9,4,5,7,1]));

function IsPopOrder(pushV, popV)
{
    // write code here
    //辅助栈
    let helpV = [];
    //遍历弹出序列的下标
    let i = 0;
    //按压入顺序 往辅助栈压入
    pushV.forEach((n)=>{
        helpV.push(n);
        while(helpV.length !== 0 && helpV[helpV.length -1] == popV[i]){
            //如果辅助栈顶元素与当前出栈元素相等，弹出
            helpV.pop();
            i++;
        }
    });
    //如果辅助栈为空，说明是合理的出栈
    if(helpV.length !== 0) return false;
    return true;
}
console.log(IsPopOrder([7,9,5,4,1],[9,4,5,7,1]));