// Exercise 1
// Create a simple Node script that converts 'www.mum.edu' domain
// name to the equivalent IP address.
// 1.	Use this core module, resolve4()
// 2.	Rewrite the code above and convert the callback function to a Promise object.
// 3.	Rewrite the code above and convert the promise to async/await block.

function callbackDNS1(error,address){
    console.log("paso1");
    console.log(address);
    console.log("end paso1");
}
const dns = require('dns');
dns.resolve4("www.mum.edu",callbackDNS) ;
//// part 2
const {promisify} = require('util'); 
dns.resolve4("www.mum.edu",promisify(callbackDNSPro)) ;

//Using util.promisify with async/await 
const {promisify} = require('util'); 
const callbackDNSPro = new Promise((resolve, reject) => (error,address){
    console.log("paso2");
    console.log(address );
    console.log("end paso2");
}

//const fs = require('fs'); 
//const readFileAsync = promisify(fs.readFile);

(resolve, reject) => (error,address){
    console.log("paso2");
    console.log(address );
    console.log("end paso2");
}

async function callbackDNSPro() { 
    try { 
        const text = await; console.log('CONTENT:', text); } catch (err) { console.log('ERROR:', err); } 
} 
main(); 


const callbackDNS2 = new Promise((resolve, reject) => (error,address){
    console.log("paso2");
    console.log(address );
    console.log("end paso2");
}



const part2_ip = dns.resolve4("www.google.com",callbackDNS2) ;
//part1_ip=dns.resolve4();
//console.log(part1_ip);
//console.log(part2_ip);