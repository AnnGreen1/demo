function containsRepeatingLetter(str) {
    let pre = '';
    for(s of str){
        if(pre==s && isNaN(parseInt(s))) return true
        pre = s;
    }
    return false
}
console.log(containsRepeatingLetter('ratlerr'));
console.log(containsRepeatingLetter('l33t'));