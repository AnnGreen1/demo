function fun(str){
    console.log(str)
    let now = str[1];
    let last = str[0];
    let time = 0;
    // for(item in str){
    //     console.log(str)
    //     first
    //     if()
    // }
    let p = 0;
    let i =0;
    while(p+2<str.length){
        console.log('--')
        if(str[p]==str[p+1]){
            time++;
            p = p+2;
        }
    }
    console.log(time)
}
fun('111222333')