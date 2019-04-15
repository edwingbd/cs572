const express = require('express');
const path = require('path');
const tasks = require('./route/tasks');
const MongoClient = require('mongodb').MongoClient;
const uriDB='mongodb+srv://homework01:homework01@colombia-7jukk.mongodb.net/test?retryWrites=true';
const client = new MongoClient(uriDB,{ useNewUrlParser: true });//need the connection
let db;

var app =express();//instanciation

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


configDB = (req,res,next)=>{
    if(!db)
        client.connect(function(err){
            if(err){console.log("hp error de mierda"+err)}
            db = client.db('todo');
            req.db=db;
            // req.db.collection('tasks').find().toArray((err, data) => {
            //     console.log(data);
            // });
            next();
        });
}
app.use((req,res,next)=>{
    if(!db)
        client.connect(function(err){
            if(err)console.log(err);
            db = client.db('todo');
            req.db=db;
            // req.db.collection('tasks').find().toArray((err, data) => {
            //     console.log(data);
            // });
            next();
        });
});

app.use('/tasks',tasks);//use module tasks it must have a return 
app.use(function(err,req,res,next) {
    console.log("fun error")
    res.status(err.status || 500);
    res.render('error',{
        message:err.message,
        error:{}
    });
} );

app.listen(3000,()=>{console.log('listingin port 3000');});