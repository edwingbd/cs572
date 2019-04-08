// Create an Express application that will accept a GET request to route /users and send a response with users json data. 
// • Use JSON data from URL https://randomuser.me/api/?results=10 
// • Fetch the data using (axios) module and use Async/Await. 
// • Your application should run fluently behind any proxy without revealing 
//      the framework name to clients, proxy should not cache the response. 
// • Your route should be case sensitive and strict. 
// • Send standard pagination options in the response headers. 
/// • Allow the response to be cached for one day if no change occur at the server. 
            //304 cached 
            //200 means not cached 
//express is like java, first you have to declare some variables then manin function 
// dependencies means imports 
// if we need to use the imports instantions 

const express = require('express');
const axios = require('axios');
const mcache = require("memory-cache")


let app = express();//this is calling function 

// 
app.set("trust proxy",true);

app.get("/favicon.ico",(req,res)=>{
    res.end();
})

const funCache = () => {
    return (req, res, next) => {
        const t= 'if-none-match';
        const etag = req.headers[t];
        let key = '__express__' + (req.originalUrl || req.url)//+etag;
        console.log('if-none-match:',etag);
        let cachedBody = mcache.get(key)
        if (cachedBody) {
            res.send(cachedBody)
            return
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key, body, 84000 * 1000);// here is 1 day
                res.sendResponse(body)
            }
            next()
        }
    }
}

app.get("/users", funCache(),  (req,res)=>{
    //res.status(200);//304allow cache
    console.log("paso1");
    res.set({"content-type":"application/json"})
    const callinfo = async () => {
    try{
        const resultPromise = await axios.get('https://randomuser.me/api/?results=10');
        console.log(resultPromise.data.results)
        res.jsonp(resultPromise.data.results );
        }
        catch(error){
            console.log(error);
            res.jsonp(error)
        }
    }
    setTimeout(()=>{
        callinfo();
    },1000);
})

app.listen(3000);// this is bootup

