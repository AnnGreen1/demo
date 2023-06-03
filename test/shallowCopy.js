// let obj = {name:'yuan',age:18};
// function shallowClone(obj) {
//   const newObj = {};
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       newObj[prop] = obj[prop];
//     }
//   }
//   return newObj
// }

// let newobj = shallowClone(obj);
// obj.name = 'mingyue';
// console.log(newobj);


// 分析
function shallowCopy(obj) {
  let copyObj = {};
  for (let i in obj) {
    copyObj[i] = obj[i];
  }
  return copyObj;
}

// 实例
let a = {
  name: "张三",
  age: 19,
  like: ["打篮球", "唱歌", "跳舞"],
};

// let b = shallowCopy(a);

let b = a;

a.name = "李四";
a.like[0] = "打打乒乓球";
console.log(a);
console.log(b);