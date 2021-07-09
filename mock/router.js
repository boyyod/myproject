const express=require('express')
const router=express.Router()
// const url=require('url')
const connectsjq=require('./Connectsql')

router.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const sql="select * from aaa where uname=? and pawd=?"
    var arr=[username,password]
    connectsjq(sql,arr,function(result){
        res.send({
            msg:'123'
        })
    })
})

module.exports =router