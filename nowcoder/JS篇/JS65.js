function base10(str) {
    let d = 0;
    let i = 0;
    for(i=0;i<str.length;i++){
        d += parseInt(str[str.length-i-1])*Math.pow(2,i);
    }
    return d;
}