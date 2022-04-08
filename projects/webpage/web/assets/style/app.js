const express = require("express");
const ejs = require("ejs");
const app=express();

app.get("/",function(req,res){

});

app.listen(3000,function(){
    console.log("Server is up and running")
});
