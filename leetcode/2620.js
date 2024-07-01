/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {

    return function () {
        // return n++
        n += 1
        return n
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

let res;
const counter = createCounter(10)
res = counter() // 10
console.log(res);
res = counter() // 11
console.log(res);
res = counter() // 12
console.log(res);