const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.get('/list',(req,res)=>{
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    var key = req.query.key;

    var offset = (pno-1)*pageSize;
    pageSize= parseInt(pageSize)
    var sql = `select lid,lname,price from xz_laptop where lname like "%${key}%" limit ?,?`;
    console.log(sql)
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

module.exports=router;