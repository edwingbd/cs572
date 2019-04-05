// • Create a web server that's going to send a response of big file (bigger then 200MB) 
// to any client that sends a request to your specified server:port. • Solve this question 
// in many different ways and inspect the loading time in the browser and send many requests 
// at the same time to observe performance differences, write down your observations 
// • Using readFileSync
// • Using readFile 
// • Using streams 


//A Simpler solution 
var http = require('http'); 
var fs = require('fs'); 
http.createServer(function(req, res) {
    var rs = fs.createReadStream('/big/file').pipe(res); 
}); 
//We can simply use stream.pipe(), which does exactly what we described. 

////resol with andres mendez
const fs = require('fs');
const server = require('http').createServer();

//Method 1: ReadFile -> High memory consumption
server.on('request', (req, res) => {
    fs.readFile(__dirname + '/BigFile.zip' , (err, data) => {
      if (err) throw err;    
      res.end(data);
      console.log("Finish readFile")
    });
}).listen(8080,'127.0.0.1');

//Method 2: ReadFileSync -> Bad Idea, navigator is waiting  
server.on('request', (req, res) => {
    fs.readFileSync(__dirname + '/BigFile.zip' , (err, data) => {
      if (err) throw err;    
      res.end(data);
    });
    console.log("Finish readFileSync");
}).listen(8080,'127.0.0.1');

//Method 3: createReadStream -> Low memory consumption -> Best alternative
server.on('request', (req, res) => {
    fs.createReadStream(__dirname + '/BigFile.zip' ).pipe(res);
    console.log("Finish Stream");
}).listen(8080,'127.0.0.1');