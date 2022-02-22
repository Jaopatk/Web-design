var express = require('express')
var routing = express()

routing.get('/1', function(req,res){
    res.send("<h1>Hello World</h1>")
})