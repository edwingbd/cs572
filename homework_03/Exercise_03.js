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