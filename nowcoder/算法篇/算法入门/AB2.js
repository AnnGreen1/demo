/**
 * @address https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106
 * @description 
 */
function IsPopOrder(pushV, popV)
{
    // write code here
    // console.log(pushV)
   let stack = [];
    let i=0;
    while(true){
        
        console.log('stack[stack.length-1]',stack[stack.length-1]);
        console.log('popV[i]',popV[i]);
        
        if(stack[stack.length-1]!=popV[0])
        {
            
            console.log(pushV.length==0);
            if(pushV.length==0){
                return false
            }else{
                stack.push(pushV[0])
                pushV.shift()
                
            }


        }else{
            stack.pop()
            popV.shift()
        }
        console.log('pushV',pushV);
        console.log('popV',popV);
        console.log('stack',stack);
        console.log('-----');
        if(popV.length==0&&stack.length==0) {
            return true;
            // break;
        }
        // if()
        i++;
        // if(i==2) break;
    }
}
module.exports = {
    IsPopOrder : IsPopOrder
};