const mysql=require("mysql")
var pool = mysql.createPool({
    host:"127.0.0.1",
    // host:"192.168.64.2",
    user:"root",
    password:"123456",
    database:"web1806",
    connectionLimit: 10,
    // connectTimeout: 20000,
    // acquireTimeout: 20000
})
module.exports=pool;