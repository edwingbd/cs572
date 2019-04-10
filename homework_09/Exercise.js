mongoimport --host COLOMBIA-shard-0/colombia-shard-00-00-7jukk.mongodb.net:27017,colombia-shard-00-01-7jukk.mongodb.net:27017,colombia-shard-00-02-7jukk.mongodb.net:27017 --ssl --username homework01 --password homework01 --authenticationDatabase admin --db homework09 --collection zips --type json --file zips.json
// connect to the mongodb
mongo "mongodb+srv://colombia-7jukk.mongodb.net/test" --username homework01
// look for the dbs
show dbs
//select the db homework
use homework09

show collections 

// This JSON file contains a list of all the zip codes in the US, Import it into
// your MongoDB (mongoimport).
// Use the Aggregation Framework to write 4 pipelines:
// 1. Find all the zip codes in Washington state.
db.zips.aggregate([{$match:{state:'WA'}},{$project:{_id:0,zip_Code:"$_id"}}])
// 2. Find all the zip codes with a population less than 5000.
db.zips.aggregate([{$match:{'pop':{$lt:5000}}},{$project:{_id:0,zip_Code:"$_id",population:"$pop"}}])
// 3. Find all cities that have more than one zip code, sort the results by state and city name.
//// paso 1
db.zips.aggregate([{$group:{_id:{state:'$state',city:'$city'},quantity:{$sum:1}}},{$project:{City:'$city'}}])
//// paso 2
db.zips.aggregate([{$group:{_id:{state:'$state',city:'$city'},quantity:{$sum:1}}},{$match:{quantity:{$gt:1}}},{$project:{_id:0,City:'$_id.city',Quantity:'$quantity'}}])
// 4. Display the least populated city in each state

db.zips.aggregate([
    {$group:{_id:{state:'$state',city:'$city'},population:{$sum:'$pop'}}},
    {$sort:{state:1, population:1}},
    {$group:{_id:{state:'$_id.state'},population2:{$first:'$population'},city:{$first:'$_id.city'}}},
    {$project:{_id:0,population:'$population2',city:'$city',state:'$_id.state'}}])
