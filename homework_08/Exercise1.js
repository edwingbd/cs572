// Questions

//in cmd import the documents
mongoimport --host COLOMBIA-shard-0/colombia-shard-00-00-7jukk.mongodb.net:27017,colombia-shard-00-01-7jukk.mongodb.net:27017,colombia-shard-00-02-7jukk.mongodb.net:27017 --ssl --username homework01 --password homework01 --authenticationDatabase admin --db homework08 --collection restaurants --type json --file restaurants.json

// connect to the mongodb
mongo "mongodb+srv://colombia-7jukk.mongodb.net/test" --username homework01
// look for the dbs
show dbs
//select the db homework
use homework08 

// 1. Write a MongoDB query to display all the documents in the collection
// restaurants.
db.restaurants.find()

// 2. Write a MongoDB query to display the fields restaurant_id, name, district and
// cuisine for all the documents in the collection restaurant.
db.restaurants.find({},{restaurant_id:1,name:1,cuisine:1})
// 3. Write a MongoDB query to display the fields restaurant_id, name, district and
// cuisine, but exclude the field _id for all the documents in the collection
// restaurant.
db.restaurants.find({},{_id:0 ,restaurant_id:1,name:1,cuisine:1})
// 4. Write a MongoDB query to display the fields restaurant_id, name, district and
// zipcode, but exclude the field _id for all the documents in the collection
// restaurant.
db.restaurants.find({},{_id:0 ,restaurant_id:1,name:1,"address.zipcode":1})
// 5. Write a MongoDB query to display all the restaurant which is in the district
// Bronx.
db.restaurants.find({district:"Bronx"},{_id:0 ,restaurant_id:1,name:1})
// 6. Write a MongoDB query to display the first 5 restaurant which is in
// the district Bronx.
db.restaurants.find({district:"Bronx"},{_id:0 ,restaurant_id:1,name:1}).limit(5)
// 7. Write a MongoDB query to display the next 5 restaurants after
// skipping first 5 which are in the district Bronx.
db.restaurants.find({district:"Bronx"},{_id:0 ,restaurant_id:1,name:1}).limit(5).skip(5)
// 8. Write a MongoDB query to find the restaurants which locates in
// coord value less than -95.754168.
db.restaurants.find({"address.coord":{$lt:-95.754168} },{_id:0,"address.coord":1 ,restaurant_id:1,name:1})
db.restaurants.find({"address.coord.0":{$lt:-95.754168} },{_id:0,"address.coord":1 ,restaurant_id:1,name:1})
// 9. Write a MongoDB query to find the restaurants that does not
// prepare any cuisine of ‘American’ and their grade score more than
// 70 and coord value less than -65.754168.
db.restaurants.find({"address.coord.0":{$lt:-65.754168},cuisine:"American " },{_id:0,"address.coord":1,cuisine:1 ,restaurant_id:1,name:1})
db.restaurants.find({"address.coord.0":{$lt:-65.754168},cuisine:{$regex:"American"} },{_id:0,"address.coord":1,cuisine:1 ,restaurant_id:1,name:1})
// 10. Write a MongoDB query to find the restaurant Id, name, district and
// cuisine for those restaurants which contains 'Wil' as first three
// letters for its name.
db.restaurants.find({name:{$regex:"^Wil"} },{_id:0,district:1,cuisine:1 ,restaurant_id:1,name:1})
// 11. Write a MongoDB query to find the restaurant Id, name, district and
// cuisine for those restaurants which contains ‘ces' as last three
// letters for its name.
db.restaurants.find({cuisine:{$regex:"ces$"} },{_id:0,district:1,cuisine:1 ,restaurant_id:1,name:1})
// 12. Write a MongoDB query to find the restaurant Id, name, district and
// cuisine for those restaurants which contains ‘Reg’ as three letters
// somewhere in its name.
db.restaurants.find({name:{$regex:"Reg"} },{_id:0,district:1,cuisine:1 ,restaurant_id:1,name:1})

// 13. Write a MongoDB query to find the restaurants which belongs to
// the district Bronx and prepared either American or Chinese dish.

// 14. Write a MongoDB query to find the restaurant Id, name, district and
// cuisine for those restaurants which belongs to the district Staten
// Island or Queens or Bronx or Brooklyn.

// 15. Write a MongoDB query to find the restaurant Id, name, district and
// cuisine for those restaurants which are not belonging to the district
// Staten Island or Queens or Bronx or Brooklyn.

// 16. Write a MongoDB query to find the restaurant Id, name, district and
// cuisine for those restaurants which achieved a score which is not
// more than 10.

// 17. Write a MongoDB query to find the restaurant Id, name, address
// and geographical location for those restaurants where 2nd element
// of coord array contains a value which is more than 42 and up to 52.

// 18. Write a MongoDB query to arrange the name of the restaurants in
// ascending order along with all the columns.

// 19. Write a MongoDB query to arrange the name of the restaurants in
// descending order along with all the columns.

// 20. Write a MongoDB query to arrange the name of the cuisine in
// ascending order and for those same cuisine district should be in
// descending order.

// 21. Write a MongoDB query to know whether all the addresses
// contains the street or not.

// 22. Write a MongoDB query which will select all documents in the
// restaurants collection where the coord field value is Double.

// 23. Write a MongoDB query to find the restaurant name, district,
// longitude and latitude and cuisine for those restaurants which
// contains 'Mad' as first three letters of its name.