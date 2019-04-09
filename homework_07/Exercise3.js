// Exercise — Fetch and Insert
// 1. Create a new DB called homework07 (Local or DaaS)
// 2. Implement REST API with Express for all CRUD operations so you
    // may: Find/FindOne/Add/Update/Delete documents
    // (Use appropriate HTTP verbs for an entity called: lectures,
    // document structure is: {_id, course, lecture})
// 3. Test your API using REST Client
// 4. Implement a route (POST /search/:q) to search if the lecture
    // name has the passed :q parameter. Send the results as JSON.
// 5. Upload your code to Github (without dependencies).

const encrypt = require('simple-encryption');
const MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb+srv://homework01:homework01@colombia-7jukk.mongodb.net/test?retryWrites=true';
const client = new MongoClient(url); 


function CallDdDecrypt(response){
  let result ="";
  client.connect(function(err) {
    if (err) throw err;
      const db = client.db('homework07'); 
      const collection = db.collection('lectures'); 
      const data = collection.findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        response.send("test");
        //return result;
      });
  });
  //return result;
}

const express = require('express');
const app = express();

app.get("/crud",function(request,response){
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
console.log("test")
app.listen(3000);
