//--------------- app.js---------------//
var express = require('express');
var fs = require('fs');
var app = express()

//for post method only
app.use(express.json())
app.use(express.urlencoded({extended: true}));
var jsonObj = []

app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})


app.post('/showData',function(req,res){
    data= {
        fname: req.body.fname,
        lname: req.body.lname,
        result: parseInt(req.body.in1)+parseInt(req.body.in2)
    }
    jsonObj.push(data)

    console.log(jsonObj)
    
    var output = JSON.stringify(jsonObj)

    res.end(output)
    fs.writeFileSync('./output.json', output,'utf8')
})

app.listen(8081)