function duplicates(arr) {
    let newarr = [];
    for(item of arr){
        let temp = arr.shift();
        if(arr.includes(temp)) newarr.push(temp)
    }
    return newarr
}