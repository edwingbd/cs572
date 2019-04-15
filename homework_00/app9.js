var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, '‘greet.txt'), 'utf8', function(err, data) {
setTimeout(() => { console.log('111timeout'); }, 0);
setImmediate(() => { console.log('111immediate'); });
process.nextTick(()=> console.log('111nexttick'));

});
(() => new Promise((resolve) => resolve('222promise')))()
.then((p) => console.log(p))
setTimeout(() => console.log('222timeout'), 0);
setImmediate(() => console.log('22immediate'));
queueMicrotask(() => console.log('22microtask'));
process.nextTick(() => console.log('22nexttick'));

/*

var fs = require('fs');
var path = require('path');
// Reading from a file:
fs.readFile(path.join(__dirname, 'data/students.csv'), 'utf-8', 
    function (err, data) {
            if (err) throw err;
            console. log(data);} );
// Writing to a file:
fs.writeFile(__dirname +'/data/students.txt', 'Hello World!', function (err) {
if (err) throw err;
console.log('Done');
});

(() => new Promise((resolve) => resolve('promise')))()
.then((p) => console.log(p))
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nexttick'));


const add = (a,b)=>{
    setTimeout (()=>{
    for(let i=0; i<9e7; i++){};
    console. log(a+b)}
    , 10);
    }
    const add2 = (a,b)=>{
        setImmediate (()=>{
        for(let i=0; i<9e7; i++){};
        console. log("YO"+a+b)}
        , 0);
        }
    console.log('start');
    const A = add(1,2);
    const B = add2(2,3);
    const C = add(3,4);
    console.log('end');
    */