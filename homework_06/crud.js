// HTTP Verbs and CRUD Consistency
// The following are the most commonly used server architecture HTTP
// methods and their corresponding Express methods:
// ¢ GET app.get() Retrieves an entity or a list of entities
// ¢ HEAD app.head() Same as GET, only without the body
// ¢ POST app.post() Submits a new entity
// ¢ PUT app.put() Updates an entity by complete replacement
// ¢ PATCH app.patch() Updates an entity partially
// ¢ DELETE app.delete() and app.del() Deletes an existing entity
// ¢ OPTIONS app.options() Retrieves the capabilities of the server

let express = require('express');           //dependencies
let request = require("request");           //dependencies
let bodyParser = require('body-parser');    //dependencies
let fs = require('fs')                      //dependencies
let morgan = require('morgan')              //dependencies
let path = require('path')                  //dependencies
let cors = require('cors');                 //dependencies
const port = 3000;  //global var

//DataSource
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tempuser:tempuser@homework07-hznuj.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
let db;
client.connect(err => {
    db = client.db('homework07')
})

//data inicial
/*let grades = [
    { id: "1", name: 'edwin Bernal', course: 'MWA', grade: 95 },
    { id: "2", name: 'Andres Mendez', course: 'Alogorithm', grade: 92 },
    { id: "3", name: 'laura', course: 'BDA', grade: 60 }
]*/

let app = express();  //instanciation
app.use(express.json());
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cors());

var urlencodedParser = express.urlencoded({ extended: true });
app.use(urlencodedParser);
app.use((req, res, next) => { req.db = db; next() })


app.use(function (req, res, next) {
    try {
        if (req.method === 'POST')
            JSON.parse(req.body);
        next();
    } catch (e) {
        res.send("not Valid JSON");
        res.end();
    }
}
);


//Get ->  Find
app.get('/lectures', function (req, res) {
    //all info in db
    req.db.collection('lectures').find({}).toArray((err, data) => {
        res.json(data)
    })
    // res.send(xxxx);
    //res.end();
});

//Get -> FindOne
app.get('/lectures/:id', function (req, res) {
    const id = req.params.id;
    const query = { course: id }
    //const result = grades.find(grade => grade.id == id);
    //specific info to return
    //const result = yyyy;
    req.db.collection('lectures').findOne(query, (err, data) => {
        console.log(data)
        res.json(data)
    })
    //res.send(JSON.stringify(result));
    res.end();
}
);

// post -> add
// this is for create a new one
app.post('/Add', function (req, res) {
    //how to add one lecture
    grades.push(req.body);
    console.log("creation of lecture");
    res.send(req.body);
    res.end();
}
);

// Put -> update
app.put('/Update/:id', function (req, res) {
    /*grades.find(grade => {
        if (grade.id == req.params.id) {
            grade.id = req.body.id;
            grade.name = req.body.name;
            grade.course = req.body.course;
            grade.grade = req.body.grade;
            return grade;
        }
    });*/
    //res.send(grades.find(grade => grade.id == req.params.id));
    //something to put
    res.end();
}
);

// Delete -> Delete
app.delete('/Delete/:id', function (req, res) {
    /*
    const filtered = grades.filter(grade => { return grade.id !== req.params.id });
    grades = filtered;
    res.send(grades);*/
    //something to delete
    res.end();
}
);

console.log(`Start listening port ${port}`);
app.listen(port);