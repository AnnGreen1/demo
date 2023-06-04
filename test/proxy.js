let person = {
  pName: "张三",
  age: 16,
};

// 管理者
let handler = {
  // 如果 handler 为空为空对象，则可以赋值
  set: (target, propKey, value, receiver) => {
    return false;
  },
};

// 使用proxy代理person对象
let proxy = new Proxy(person, handler);

console.log(proxy.pName); // 张三
proxy.pName = "李四";
console.log(proxy.pName); // 张三
