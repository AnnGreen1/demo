function containsNumber(str) {
    let arr = [0,1,2,3,4,5,6,7,8,9].find(item => str.includes(item))
    return arr == undefined ? false : true
}
let res = containsNumber('ab89c');
console.log(res);