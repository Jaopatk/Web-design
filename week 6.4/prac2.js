/*  //--------------Practice 2-------------//
Collection name: "student_records"

[
    { name: "Bob", courseid: "egci111", coursename: "computer programming", mark: 80 },
    { name: "Tom", courseid: "egci111", coursename: "computer programming", mark: 50 },
    { name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
    { name: "John", courseid: "egci427", coursename: "Web programming", mark: 70 },
    { name: "Jame", courseid: "egci472", coursename: "Web programming", mark: 60 },
]

1) Find who take "Computer Programming"
2) Find who have mark >60
3) Find the student name start with J*
*/

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("student_records")
   /* var obj = [
        { name: "Bob", courseid: "egci111", coursename: "computer programming", mark: 80 },
        { name: "Tom", courseid: "egci111", coursename: "computer programming", mark: 50 },
        { name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
        { name: "John", courseid: "egci427", coursename: "Web programming", mark: 70 },
        { name: "Jame", courseid: "egci472", coursename: "Web programming", mark: 60 },
    ]*/
    //var query = {coursename: "computer programming"}
    //var query = {mark:{$gt:60}}
    var query = {name:/^J/}

   /* dbo.collection("product").insertMany(obj, function(err, result){
        if(err) throw err
        console.log("Inserted "+ result.insertedCount+ " items")
    })*/

    dbo.collection("product").find(query).toArray(function(err, result){
            if(err) throw err
            console.log(result)
            database.close()
    })
    
})