onmessage = function(e){
    var num = parseInt(e.data)
    var sum = 0;
    for (var i = 0;i<num;i++) {
        sum += i;
    }
    postMessage(sum)
}