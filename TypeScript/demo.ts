// let num:number = 9;
// let str:string = 'xxx';
// num = str;
// console.log(num)

// let t:[number, string] = ['1', '1'];

// let nu:null = null;
// console.log(typeof nu)

// const setName5 = (name: string):string => '1';
// setName5("Domesy"); // "hello",  "Domesy"

enum numberType {
    A,
    B,
    C = 7,
    D
}

let num = numberType.A;
let num1 = numberType[0];
let num2 = numberType[7];
let num3 = numberType[8];

console.log(num) // 0
console.log(num1) // A
console.log(num2) // C
console.log(num3) // D