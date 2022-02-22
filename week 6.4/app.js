//-----create collection-----------------//
var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err,database){
    if(err) throw err
    var dbo = database.db("EGCO427_2022")
    dbo.createCollection("product",function(err, result){
        if(err) throw err
        console.log("Collection is created")
        database.close()
    })

})