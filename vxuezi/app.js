const express=require("express");
const routerImageList=require("./router/imagelist")
const routerNewsList=require("./router/newslist")
const routerGoodsList=require("./router/goodslist")
const routerCartslist=require("./router/cartlist")
const cors=require("cors")
const bodyParse=require("body-parser")

var app=express();
app.listen(3000);
app.use(express.static(__dirname+"/public"));
app.use(bodyParse.urlencoded({
    extended:false
}))
app.use(cors(
    {
        origin:["http://localhost:8080","http://127.0.0.1:8080"],
        credentials:true
    }
))

app.use('/imagelist',routerImageList);
app.use('/newslist',routerNewsList);
app.use('/goodslist',routerGoodsList);
app.use('/cartlist',routerCartslist);
