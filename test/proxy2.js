let person = {
  pName: "张三",
  age: 16,
};

let handler = {
  get: (target, propKey, receiver) => {
    // 获取年龄时加1处理，不是年龄时原样返回
    return propKey == "age" ? target[propKey] + 1 : target[propKey];
  },
  set: (target, propKey, value, receiver) => {
    if (propKey == "pName") {
      if (/\d/.test(value)) {
        console.log("姓名不能包含数字");
        return false;
      }
    }
    target[propKey] = value;
  },
};

let proxy = new Proxy(person, handler);

console.log(proxy.age); // 17
proxy.pName = "王7"; // 姓名不能包含数字
proxy.age = 50;
console.log(proxy); // Proxy {pName: '张三', age: 50}
proxy.pName = "赵四";
console.log(proxy); // Proxy {pName: '赵四', age: 50}



let date = new Date();
let datehandler = {
    get:(target, propKey, receiver) =>  {
        console.log(target);
    },
    set:(target, propKey, value, receiver) => {
        target = value;
    }
}

let dateproxy = new Proxy(date, datehandler);

setInterval(() => {
    date = new Date();
    console.log(date);
    
}, 1000);
