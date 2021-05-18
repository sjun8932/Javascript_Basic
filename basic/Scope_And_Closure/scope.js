//콘솔창에서 node 명령어로 실행해보기
var d = 'X';

function outer() {
    var a = 1;
    var b = 'B';

    function inner() {
        var a = 2;
        console.log(b);
    }
    return inner;
}
var someFun = outer();
someFun();