let obj = {
    name:'zhangsan',
    age:18
}
/**
 * 所谓的浅拷贝
 */
// let copyObj = obj;
// copyObj.name = 'lisi';
// console.log(obj);
// console.log(copyObj);

/**
 * @description: 实现深拷贝的一种方法
 */
let copyObj = JSON.parse(JSON.stringify(obj));
copyObj.name = 'lisi';
console.log(obj);
console.log(copyObj);