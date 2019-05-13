const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.get('/list',(req,res)=>{
    var obj = {
        code:1,msg:[
            {id:1,name:"华为 p30",price:3999,count:1},
            {id:2,name:"魅族 16s",price:2999,count:2},
        ]
    }
    res.send(obj)
})

module.exports=router;