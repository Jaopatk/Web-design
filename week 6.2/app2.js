//------------EJS----------------//
//---------app.js--------------//
var express = require('express')
var app = express()

app.set('view engine','ejs') //Set View
app.get('/:name',function(req,res){
    var data = {user: "Bob", age: 20,job: "student"}
    res.render('profile',{person: req.params.name})
})

app.listen(8081)