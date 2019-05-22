const  express = require("express")
var app = express();
app.listen(3000);
app.use(express.static(__dirname+"/public"));
app.get("/list",(req,res)=>{
    var obj =[
        {"label":"东里","value":50},
        {"label":"西里","value":80},
        {"label":"南里","value":110},
        {"label":"北里","value":0}
    ];
    res.send(obj)
})