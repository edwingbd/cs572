// Exercise 1
// Create a simple Node script that converts 'www.mum.edu' domain
// name to the equivalent IP address.
// 1.	Use this core module, resolve4()
// 2.	Rewrite the code above and convert the callback function to a Promise object.
// 3.	Rewrite the code above and convert the promise to async/await block.
function callbackDNS(error,address){
    console.log("paso1");
    console.log(address);
    //console.log(error);
    console.log("end paso1");
}

const callbackDNS2 = function (error,address){
    console.log("paso2");
    console.log(address );
    console.log("end paso2");
}

const dns = require('dns');
const part1_ip = dns.resolve4("www.mum.edu",callbackDNS) ;
const part2_ip = dns.resolve4("www.google.com",callbackDNS2) ;
//part1_ip=dns.resolve4();
//console.log(part1_ip);
//console.log(part2_ip);