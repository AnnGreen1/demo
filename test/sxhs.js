let times = 100;
while(times<=1000){
    times+='';
    
    let g =parseInt(times[2]) ;
    let s =parseInt(times[1]) ;
    let b =parseInt(times[0]) ;
    // console.log(g, s, b);
    if(g*g*g + s*s*s + b*b*b === parseInt(times)) console.log(times);
    times++;
}