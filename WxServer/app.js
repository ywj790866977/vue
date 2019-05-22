const express = require("express");
const app = express();
const mysql = require("mysql");
const qs = require("querystring");

var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"123456",
    database:"web1806",
    connectionLimit: 10
})

app.listen(3000);
app.use(express.static(__dirname+"/public"));

//1 小程序首页,图片列表
app.get('/imagelist',(req,res)=>{
    var sql = 'SELECT `id`, `img_url`, `title` FROM `xz_imagelist`'
    pool.query(sql,[],(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//2 信息列表
app.get('/message',(req,res)=>{
    var rows=[
        {id:1,title:"手机大促",date:"2019-5-20",img_url:"http://localhost:3000/img/banner1.png",desc:"越努力越.."}
    ]
    rows.push({id:2,title:"敌敌畏大促",date:"2019-5-20",img_url:"http://localhost:3000/img/banner2.png",desc:"不好喝不要钱.."});
    rows.push({id:3,title:"人妖大促",date:"2019-5-20",img_url:"http://localhost:3000/img/banner3.png",desc:"知男而上!.."})
    res.send(rows)
})

//商品信息
app.get('/detail',(req,res)=>{
    var pid = req.query.pid;
    var obj = {
        pid:pid,
        title:"隆昌猪脚饭",
        oldprice: 1999.99,
        newprice: 1333.33,
        info:"不好吃不要钱"
    }
    res.send(obj)
})


//分页商品列表
app.get('/products',(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    var process = 0;
    var obj = {pno:pno,pageSize:pageSize};

    var sql = 'select count(id) as c from product';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var pageCount = Math.ceil(result[0].c/pageSize);
        obj.pageCount=pageCount;
        process += 50;
        if(process == 100 ) res.send(obj)
    })

    var offset = parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize)
    var sql = 'select * from product limit ?,?';
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        obj.data = result;
        process += 50;
        if(process == 100) res.send(obj)
    })
})

//注册
app.post('/addUser',(req,res)=>{
    req.on("data",(buff)=>{
        var obj = qs.parse(buff.toString());
        res.send(obj)
    })
})