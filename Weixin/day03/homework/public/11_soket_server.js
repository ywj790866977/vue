const ws = require("ws")
var server = new ws.Server({port:9001});
console.log("服务开启");

server.on("connection",(socket)=>{
    var count = 0;
    var timer = setInterval(()=>{
        count ++;
        socket.send("laji - " + count);
    })
})
server.on("message",(msg)=>{
    console.log("客户端: "+msg)
})
socket.on("close",()=>{
    clearInterval(timer)
})