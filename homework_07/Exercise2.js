// Exercise Reveal The Secret Message! I 
//  1. Using DaaS, read one document from: DB: homeworkel, Collection: data, username: homeworkOl, password: homeworkel 
//      Connection String: mongodb://homework0l:homework0l@ds233806.mlab.com:33806/homeworke01 
// 1. Write Express application and use findOne() with projection to read two fields {key, message} to read the document 
//      from mLab Server, decrypt the message using ('simple-encryptor') 
// 2. Send the decrypted message as JSON object in the response to a route (/secret). 
//3. Upload your code to Github (without dependencies). 
const encrypt = require('simple-encryption');
const MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01';
const client = new MongoClient(url); 


function CallDdDecrypt(response){
  let result ="";
  client.connect(function(err) {
    if (err) throw err;
      const db = client.db('homework01'); 
      const collection = db.collection('data'); 
      //const options = ( 'skip' : 'limit' : 4, 'sort' : ['grade', 1] 3; 
      const data = collection.findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.key);
        console.log(result.message);
        const encryptor = require('simple-encryptor')(result.key);
        result=JSON.stringify({secret:encryptor.decrypt(result.message)})
        console.log(result);
        response.send(result);
        //return result;
      });
  });
  //return result;
}

const express = require('express');
const app = express();

app.get("/secret",function(request,response){
  response.set('Content-Type', 'application/json');
  CallDdDecrypt(response);
  // const result = CallDdDecrypt();
  // console.log("At secret", result);
  //response.send("popo" );
});

app.get("/test",function(request,response){
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({key:"value"}));
});



app.listen(3000);


function newFunction(response) {
  response.send(CallDdDecrypt());
  response.end();
}
//CallDdDecrypt();