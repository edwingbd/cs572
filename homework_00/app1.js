var x = 1; 
function f() {
        var y = 2; 
        var summ = function() { 
            var z = 3;
            console.log(x + y + z); 
        }; // inner function closes over free variables x, 
    y = 10; 
    return summ; 
    function setY(valuee){
        this.y=valuee;
    }
} 
console.log("test 1");
var g = f()(); 
console.log("test 2");
x=5;
f()();
console.log("test 3");
var g = f();
g.setY(6);
g();
//(); // 14 