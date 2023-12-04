// let num:number = 9;
// let str:string = 'xxx';
// num = str;
// console.log(num)

// let t:[number, string] = ['1', '1'];

// let nu:null = null;
// console.log(typeof nu)

// const setName5 = (name: string):string => '1';
// setName5("Domesy"); // "hello",  "Domesy"

// enum numberType {
//     A,
//     B,
//     C = 7,
//     D
// }

// let num = numberType.A;
// let num1 = numberType[0];
// let num2 = numberType[7];
// let num3 = numberType[8];

// console.log(num) // 0
// console.log(num1) // A
// console.log(num2) // C
// console.log(num3) // D

// let a; // 推断为any
// let str = "小杜杜"; // 推断为string
// let num = 13; // 推断为number
// let flag = false; // 推断为boolean

// str = true; // error Type 'boolean' is not assignable to type 'string'.(2322)
// num = "Domesy"; // error
// flag = 7; // error

// let str:'yuan';
// str = 'yuan';

// let str: "小杜杜";
// str = "小杜杜"; //ok

// let anyyy:any = 0;
// console.log(typeof anyyy)

// let nu: null = null;
// let a: any = nu;
// let str: string = nu;

// let n:number = 5;
// n = 'fa';
// console.log(n);

// type AProps = { a: string; c: number };
// type BProps = { b: number; c: number };

// type AllProps = AProps & BProps;

// const Info: AllProps = {
//   a: "小肚肚",
//   b: 7,
//   c: 1,
// };

// interface stu {
//   name: String;
// }

// let num: number;
// let num1!: number;

// const setNumber = () => (num = 7);
// const setNumber1 = () => (num1 = 7);

// setNumber();
// setNumber1();

// console.log(num); // error
// console.log(num1); // ok

type Person = {
  name: string;
  age: number;
  [key: string]: any;
};

let person: Person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer", // 可以添加任意属性
};
