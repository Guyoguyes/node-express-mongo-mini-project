var express = require ("express");
var app = express();
var port = 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));



var mongoose = require("mongoose");
mongoose.promise = global.promise;mongoose.connect("mongodb://localhost:27017/node");


var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

var User = mongoose.model("User", nameSchema);

app.post("/addname",(req, res)=>{
    var myData =new User(req.body);
    myData.save()
    .then(item =>{
        res.send("item saved to database")
    });
   
});

app.listen(port,()=>{
    console.log("server listening on port" +port);
});