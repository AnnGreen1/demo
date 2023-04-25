function _factorial(number) {
    // 补全代码
    let res = 1;
    while(number>=1){
        res*=number;
        number--;
    }
    return res;
}