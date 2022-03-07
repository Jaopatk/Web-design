//---------------- MONGO Database ------------------//

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"
/*
 //-----create collection-----------------//
MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    dbo.createCollection("product",function(err, result){
        if(err) throw err
        console.log("Collection is created")
        database.close()
    })

})
*/

//Insert one item
/*
 * MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    var obj = {name: "Coffee Mug", price: 10}
    dbo.collection("product").insertOne(obj, function(err, result){
        if(err) throw err
        console.log("Inserted "+ result.insertedId)
        database.close()
    })

})
*/

//Insert many items
/*
MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    var obj = [ 
        { name: "Book", price: 10 },
        { name: "Pencil", price: 5 },
        { name: "Calculator", price: 40 },
        { name: "Notebook", price: 15 },
        { name: "T-Shirt", price: 20 },
        { name: "Jacket", price: 20 }
      ]
    dbo.collection("product").insertMany(obj, function(err, result){
        if(err) throw err
        console.log("Inserted "+ result.insertedCount+ " items")
        database.close()
    })

})
*/

//find one item
/*
 * MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    //var obj = {name: "Coffee Mug", price: 10}
    dbo.collection("product").findOne({}, function(err, result){
        if(err) throw err
        console.log(result.name)
        database.close()
    })

})
*/

//find many item
/*MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    //var obj = {name: "Coffee Mug", price: 10}
    dbo.collection("product").find({}).toArray(function(err, result){
        if(err) throw err
        console.log(result)
        database.close()
    })

})*/

//Query
/*MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    //var obj = {name: "Coffee Mug", price: 10}
    //var query = {name: "Coffee Mug"}
    //var query = {price: 10}
    var query = {name: /^C/}

    dbo.collection("product").find(query).toArray(function(err, result){
        if(err) throw err
        console.log(result)
        database.close()
    })

})*/


//Sorting
/*MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    var keysort = {name : -1} //1: ascending  -1: descending

    dbo.collection("product").find().sort(keysort).toArray(function(err, result){
        if(err) throw err
        console.log(result)
        database.close()
    })
})*/


//Delete One
/* MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    var query = {name: "Pencil"}

    dbo.collection("product").deleteOne(query, function(err, result){
        if(err) throw err
        console.log(query.name + " is deleted")
        database.close()
    })
}) */

//Delete Many
/* MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    var query = {name: /^C/}

    dbo.collection("product").deleteMany(query, function(err, result){
        if(err) throw err
        console.log(result.deletedCount + " document(s) are deleted")
        database.close()
    })
}) */

//Update One
/* MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    var query = {name: "Notebook"}
    var newvalues = {$set: {name: "Notebook", price: 30}}

    dbo.collection("product").updateOne(query, newvalues, function(err, result){
        if(err) throw err
        console.log(result.modifiedCount + " document(s) are updated")
        database.close()
    })
}) */
