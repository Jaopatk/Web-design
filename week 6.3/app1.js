var express  = require('express')
var app = express()
var fs = require('fs')


//-------------GET Method----------------//
app.get('/getUsers',function(req,res){
    fs.readFile(__dirname+"/user.json", "utf8", function(err, data){
        if(err) throw err
        console.log(data)
        res.end(data)
    })
})

//-------------GET Method with condition----------------//
app.get('/getUsers/:id',function(req,res){
    fs.readFile(__dirname+"/user.json", "utf8", function(err, data){
        if(err) throw err

        var users = JSON.parse(data)
        var user =users["user"+req.params.id]

        console.log(user)
        res.end(JSON.stringify(user))
    })
})

//-------------POST Method for adding user----------------//

var user4 = { //Global user
    "user4": {
        "name": "betty",
        "password": "4444",
        "occupation": "engineer",
        "id": 4
    }
}


app.post('/addUser',function(req,res){
    fs.readFile(__dirname+"/user.json", "utf8", function(err, data){
        if(err) throw err

        var users = JSON.parse(data)
        //add new user (user4)
        users["user4"] = user4["user4"]

        console.log(users)
        res.end(JSON.stringify(users))
    })
})

//-------------DELETE Method for deleting user----------------//
app.delete('/delUser/:id',function(req,res){
    fs.readFile(__dirname+"/user.json", "utf8", function(err, data){
        if(err) throw err

        var users = JSON.parse(data)
        //delete a user
        delete users["user"+req.params.id]

        console.log(users)
        res.end(JSON.stringify(users))
    })
})

//GET http:localhost:8081/insertUser/Sue/5555/student/5

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})
