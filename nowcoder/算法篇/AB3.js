
/**
  * 
  * @param s string字符串 
  * @return bool布尔型
  */
function isValid( s ) {
    // write code here
    let stack = [];
    for(str of s){
        if(stack.length>=1){
            if(stack[stack.length-1]=='(' && str == ')')  {stack.pop()}
            else if(stack[stack.length-1]==')' && str == '(')  {stack.pop()}
            else if(stack[stack.length-1]=='{' && str == '}')  {stack.pop()}
            else if(stack[stack.length-1]=='}' && str == '{')  {stack.pop()}
            else if(stack[stack.length-1]=='[' && str == ']')  {stack.pop()}
            else if(stack[stack.length-1]==']' && str == '[')  {stack.pop()}
            else stack.push(str)
            console.log(stack)
        }else{
            stack.push(str)
        }
    }
    return stack.length == 0 ? true : false;
}
module.exports = {
    isValid : isValid
};