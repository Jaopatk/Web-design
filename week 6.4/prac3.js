/*
//------------Practice 3 : submmit-----//
Follow the instruction below for this practice.
Please submit the app.js but rename to app_studentID.txt. Ex. app_61234567.txt

//----------------------- Instruction -----------------------//
Collection: students
id      firstname       lastname        age     major
1       Bob             Cat             21      Math
2       Tom             Cat             18      Science
3       Marry           Lamb            19      Social Study
4       Linda           Lamb            21      IT
------------------------------------------------------------------


Output shows the JSON data on the web browser by calling the URL.
*/

var express = require('express');
var route = express()
var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"

/*1) Find students who are in the major "Science"
1) http://localhost:8081/showMajor/Science
*/

route.get('/ShowMajor/:major', function (req, res) {
    MongoClient.connect(url, function (err, database) {
        if (err) throw err
        var dbo = database.db("EGCO427_2022")
        var query = {
            major: req.params.major
        }

        dbo.collection("students").find(query).toArray(function (err, result) {
            if (err) throw err
            console.log(result)
            res.end(JSON.stringify(result, null, 2))
            database.close()
        })
    })
})

/*2) Find students that their age < 20 and sort by descending
2) http://localhost:8081/showAgeLessThan/20
*/

route.get('/showAgeLessThan/:age', function (req, res) {
    MongoClient.connect(url, function (err, database) {
        if (err) throw err
        var dbo = database.db("EGCO427_2022")

        var query = {
            age: {
                $lt: parseInt(req.params.age)
            }
        }
        var keysort = {
            age: -1
        } //1: ascending  -1: descending


        dbo.collection("students").find(query).sort(keysort).toArray(function (err, result) {
            if (err) throw err
            console.log(result)
            res.end(JSON.stringify(result, null, 2))
            database.close()
        })

    })
})

/*3) Update the lastname of students "Lamb" to be "Fox"
3) http://localhost:8081/updateLastname/Lamb/Fox
*/

route.get('/updateLastname/:lastname/:changedtolname', function (req, res) {
    MongoClient.connect(url, function (err, database) {
        if (err) throw err
        var dbo = database.db("EGCO427_2022")

        var query = {
            lastname: req.params.lastname
        }
        var newvalues = {
            $set: {
                lastname: req.params.changedtolname
            }
        }

        dbo.collection("students").updateMany(query, newvalues, function (err, result) {
            if (err) throw err
            console.log(result.modifiedCount + " document(s) are updated")
            res.end(JSON.stringify(result.modifiedCount + " document(s) are updated"))
            database.close()
        })
    })
})

/*4) Insert new student {id: 5, firstname: "Adam", lastname: "Zoo", age: 22, major: "Math"}
4) http://localhost:8081/insertStudent/5/Adam/Zoo/22/Math    
*/

route.get('/insertStudent/:id/:firstname/:lastname/:age/:major', function (req, res) {
    MongoClient.connect(url, function (err, database) {
        if (err) throw err
        var dbo = database.db("EGCO427_2022")

        var obj = {
            id: parseInt(req.params.id),
            firstname: req.params.firstname,
            lastname: req.params.lastname,
            age: parseInt(req.params.age),
            major: req.params.major
        }

        dbo.collection("students").insertOne(obj, function (err, result) {
            if (err) throw err
            console.log("Inserted " + result.insertedId)
            res.end(JSON.stringify("Inserted " + result.insertedId))
            database.close()
        })

    })
})

route.listen(8081)