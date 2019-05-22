const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.get('/list',(req,res)=>{
    var obj=[
        {id:1,img_url:"http://localhost:3000/img/meizu.jpg",title:"魅族 16s",p_old:"3198.00",p_now:"2999.00",sell:1},
        {id:2,img_url:"http://localhost:3000/img/huawei.jpg",title:"华为 p30",p_old:"4999.00",p_now:"3999.00",sell:1},
    ]
    res.send({code:1,msg:obj})
})

router.get('/find',(req,res)=>{
    var obj={id:'9',title:'魅族 16s',p_old:3198,p_now:2999,p_sn:'2199282',p_type:"旗舰"}
    res.send(obj)
})

module.exports=router;



