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
  
  let b = shallowCopy(a);
  
  a.name = "李四";
  a.like[0] = "打打乒乓球";
  console.log(a);
  console.log(b);