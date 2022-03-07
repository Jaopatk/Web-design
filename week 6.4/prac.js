/*1. Insert these 2 items below.

var obj = [ 
              { name: "Computer", price: 1000 },
              { name: "Cup", price: 15 }
            ]


2. Show the items that the price > 15 sorting by price (ascending order)*/

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"


MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    
    var obj = [ 
    { name: "Computer", price: 1000 },
    { name: "Cup", price: 15 }
     ]
    
     var keysort = {price : 1} //1: ascending  -1: descending
     var query = {price:{$gt:15}}

 /*   dbo.collection("product").insertMany(obj, function(err, result){
        if(err) throw err
        console.log("Inserted "+ result.insertedCount+ " items")
    })*/

    dbo.collection("product").find().sort(keysort).toArray(function(err, result){
         if(err) throw err
         console.log(result)
         database.close()
     })
})