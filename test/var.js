/**
 * 在全局域中 var b = 1; 和 b = 1; 是一样的，
 * 在局部作用域中， var b = 2; 代表要操作局部作用域的 b
 * 在局部作用域中， b = 2;  代表要操作全局的 b 
 */
let a = 0;
var b = 1;
function fun(){
   var b=3;
    console.log('a',a)
    console.log('b',b)
}
fun();
console.log('b',b)