const mysql=require('mysql');

 const sjq= {
    host:"localhost",
    user:"lxy",
    password:"123456",
    database:"lxy"
}

const client =mysql.createConnection(sjq);
function collectsjq(sql,arr,callback){
    client.query(sql,arr,function(error,result){
        if(error){
            console.log(error);
            return
        }
        callback(result);
    })
}

module.exports= collectsjq