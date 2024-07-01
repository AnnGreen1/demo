/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x += ''
    let ps = 0;
    let pe = x.length - 1
    let flag = true;
    while (ps < pe) {
        if (x[ps] == x[pe]) {
            ps++;
            pe--
            flag = true
        } else {
            console.log('---');
            flag = false
            break;
        }
    }
    return flag
};

let res
res = isPalindrome(121)
console.log(res);

res = isPalindrome(1231)
console.log(res);

res = isPalindrome(10)
console.log(res);