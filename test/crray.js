function sum(front){
    return function(inner){
        return front+inner
    }
}

console.log(sum(1)(2));