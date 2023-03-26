var a = 10;
function fn(){
    var b = 20;
    function bar(){
        console.log(a + b);
    }
    return bar;
}

var x = fn(),
    b = 200;

    x();