const express = require ('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));// if you install body-parser then you have to write this line.

app.get('/', function(req, res) {
    res.sendFile(__dirname + ("/index.html"));  // dirname helps to connect the frontend part with server.
});

app.post('/', function(req, res) {
    var num1 = Number(req.body.n1);
    
    var num2 = Number(req.body.n2);
    
    var result = num1 + num2;
    
    res.send("The result of calculation " + result)});

app.listen(3000,function(){
    console.log("runnning on port 3000...");
});
