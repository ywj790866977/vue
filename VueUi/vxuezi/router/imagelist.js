const express=require("express")
const pool=require("../pool")
const router = express.Router();

router.get("/list",(req,res)=>{
    var sql= 'select id,img_url,title from xz_imagelist';
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        res.send({code:1,msg:result})
    })
})


module.exports=router;