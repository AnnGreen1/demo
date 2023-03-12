// let num:number = 9;
// let str:string = 'xxx';
// num = str;
// console.log(num)
// let t:[number, string] = ['1', '1'];
// let nu:null = null;
// console.log(typeof nu)
// const setName5 = (name: string):string => '1';
// setName5("Domesy"); // "hello",  "Domesy"
var numberType;
(function (numberType) {
    numberType[numberType["A"] = 0] = "A";
    numberType[numberType["B"] = 1] = "B";
    numberType[numberType["C"] = 7] = "C";
    numberType[numberType["D"] = 8] = "D";
})(numberType || (numberType = {}));
var num = numberType.A;
var num1 = numberType[0];
var num2 = numberType[7];
var num3 = numberType[8];
console.log(num);
console.log(num1);
console.log(num2);
console.log(num3);
