function functionFunction(str) {
    let s = str + ', ';
    return function(p){
        return s + p
    }
}
console.log(functionFunction('Hello')('world'));