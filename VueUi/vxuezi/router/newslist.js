const express=require("express");
const pool=require("../pool");
const router=express.Router();


router.get("/list",(req,res)=>{
    var pno=req.query.pno
    var pageSize=req.query.pageSize
    if(!pno) pno=1;
    if(!pageSize) pageSize=10;

    var reg=/^\d{1,}$/
    if(!reg.test(pno)){
        res.send({code:-1,msg:"页码格式不正确"})
        return;
    }
    if(!reg.test(pageSize)){
        res.send({code:-2,msg:"页大小格式不正确"})
        return;
    }

    var obj={pno:pno,pageSize:pageSize}; //返回的对象
    var progress=0 //设置一个变量,用于统计两个sql执行的进度

    var sql1='select count(id) as c from xz_news'

    pool.query(sql1,(err,result)=>{
        if (err) throw err;
        obj.pageCount=result[0].c
        progress+=50;
        if(progress==100)
            res.send({code:1,msg:obj})
    })

    var sql2='select id,title,ctime,click from xz_news limit ?,?'
    var offset=(pno-1)*pageSize;
    pageSize= parseInt(pageSize)
    pool.query(sql2,[offset,pageSize],(err,result)=>{
        if (err) throw err;
        obj.data=result;
        progress+=50;
        if(progress==100){
            if(result.length>0)
                res.send({code:1,msg:obj})
            else
                res.send({code:-1,msg:obj})
        }
    })
})

//功能2，
router.get('/find',(req,res)=>{
    var id=req.query.id;
    var sql="select `id`, `title`,`content`,`click`,`img_url`,`price`,`ctime` from xz_news where id=?"
    pool.query(sql,[id],(err,result)=>{
        if (err) throw err;
        res.send({code:1,msg:result[0]})
    })
})

//显示评论
router.get('/comment',(req,res)=>{
    var pno = req.query.pno;
    var pageSize = req.query.pageSzie;
    var nid = req.query.nid;

    if(!pno) pno=1;
    if(!pageSize) pageSize=5;

    var obj={pno:pno,pageSize:pageSize}
    var progress=0;

    var sql='select count(id) as c from xz_comment where nid=?'
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err;
        obj.pageCount=parseInt(result[0].c/pageSize) //总页数
        progress += 50;
        if(progress==100)
            res.send({code:1,msg:obj});
    })
    
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);

    var sql='select `id`,`nid`,`ctime`,`content`,`username`,`isdel` from xz_comment where nid=?  order by id desc limit ?,?' ;
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
        if (err) throw err;
        obj.data = result;
        progress += 50;
        if(progress == 100)
            res.send({code:1,msg:obj});
    })
    
})

//发表评论
router.post('/saveComment',(req,res)=>{
    var nid=req.body.nid;
    var username=req.body.username;
    var content=req.body.content;
    if(content.length<2){
        res.send({code:-1,msg:"内容长度小于2"})
        return;
    } 

    var sql='insert into `xz_comment`(`id`,`nid`,`ctime`,`content`,`username`,`isdel`) values(null,?,now(),?,?,0)'
    pool.query(sql,[nid,content,username],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.affectedRows==1)
            res.send({code:1,msg:"添加成功"})
        else
            res.send({code:-1,msg:"添加失败"})
    }) 

})
module.exports=router;



