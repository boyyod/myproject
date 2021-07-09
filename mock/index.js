const express=require('express')
const debug=require('debug')('my-application')
const  app=express();
const router = require('./router')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/api",router)
app.listen(3002,function(){
   debug(3002);
})