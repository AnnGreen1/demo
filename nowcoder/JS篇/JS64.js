function valueAtBit(num, bit) {
    num = num.toString(2);
    return num[num.length-bit]
}
console.log(valueAtBit(2, 1));