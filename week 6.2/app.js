//------------Middleware 1-------------------//
var express = require('express')
var routing = express()

routing.get('/', function(req,res){
    res.send("<h1>Hello World</h1>")
})

routing.get('/profile/:name', function(req,res){
    res.send("<h1>Welcome "+req.params.name+"</h1>")
    console.log("Request: "+ req.params.name+" Date: " +new Date(), req.method, req.url)
})

routing.use('/user/profile/:name', function(req,res, next){
    console.log("Request: "+ req.params.name+" Date: " +new Date(), req.method, req.url)
})