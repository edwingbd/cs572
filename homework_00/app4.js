//arguments objcets
function findMax() { 
    var i; 
    var max = -Infinity; 
    for ( i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) { 
            max = arguments[i];
        }
    } 
    return max; 
} 
var x = findMax(1, 123, 500, 115, 44, 88); // 500 
console.log(x);
var x = findMax(5, 32, 24); // 32 
console.log(x);

// function signature 
function testParametor(a,b,c){
    console.log("a "+a);
    console.log("b "+b);
    console.log("c "+c);
}
// testParametor(1);
// testParametor(1,2);
// testParametor(1,2,3);
// testParametor(1,2,3,1,1,1,1,11,);

// part about es6 and differents in this case testva don't past
{
    const testva = "cosa";
}
//console.log(testva);
    