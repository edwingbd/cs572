const express = require('express');
router = require('express').Router();

router.get('',(req,res,next) => {
    console.log('data');
   console.log({message:'listo'});
    next();
});

router.get('',(req,res,next)=>{
    console.log({message:'listopaso por aca'});
    try{
        res.set('link','<http://localhost:3000/cosas?results=10^p=2 rel="next >')
        req.db.collection('tasks').find({}).toArray((err,data)=>{res.json(data);});//res.end()
        //res.end();
    }
    catch (err){
        console.log(err);
        next();
    }
});

router.post('',(req,res,next)=>{
    let toinsert = req.body.data;
    //console.log(toinsert);
    req.db.collection('tasks').insertOne(toinsert,(err,data)=>{
        console.log({message:'there is inserted the id '+toinsert._id});
        res.json({message:'there is inserted the id '+toinsert._id})
        //res.end();
    })
});

router.delete('/:task_id',(req,res,next)=>{
    let id= req.parameters.task_id;
    req.db.collection('tasks').remove({'_id':id})
    console.log(id);
    res.send('ok');
    //res.end();
});

router.patch('/:task_id',(req,res,next)=>{
    let id= req.parameters.task_id;
    req.db.collection('tasks').update({'_id':id},{'$set':{'status':1,'adsf':'adsf'}})
    console.log(id);
    res.send('ok');
    //res.end();
});


return module.exports=router