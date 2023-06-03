// // 分析
// function deepCopy(obj) {
//   // 判断是否为引用数据类型
//   if (typeof obj === "object") {
//     let result = obj.constructor === Array ? [] : {};
//     // 对引用类型继续进行遍历，如果遍历没有结束的话-
//     for (let i in obj) {
//       result[i] = typeof obj[i] === "object" ? deepCopy(obj[i]) : obj[i];
//     }

//     return result;
//   }
//   // 为基本数据类型，直接赋值返回
//   else {
//     return obj;
//   }
// }

// // 实例 - 利用递归函数做深拷贝-
// let c = {
//   name: "张三",
//   age: 12,
//   like: ["打乒乓球", "打羽毛球", "打太极"],
// };

// let d = deepCopy(c);

// c.name = "李四";
// c.like[0] = "打篮球";
// console.log(c);
// console.log(d);

let date = new Date();
console.log(date);
let date2 = JSON.parse(JSON.stringify(date));
date = new Date(2021,10,27);
console.log(date);
console.log(date2);
