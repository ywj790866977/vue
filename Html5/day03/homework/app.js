const express = require("express");
const app = express();
const mysql = require("mysql")

var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"123456",
    database:"web1806",
    connectionLimit: 10
})

app.listen(3000);
app.use(express.static(__dirname+"/public"));
app.get('/sales',(req,res)=>{
    var sql = 'select y.id,y.name,x.sales from yaopin y inner join xiaoshou x on y.id = x.yid;'
    pool.query(sql,[],(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})
//http://localhost:3000/sales