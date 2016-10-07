var buffer = new Buffer(100);

for(var i=0;i<buffer.length;i++){
    buffer.writeUInt8(i,i);
}

var targetStart = 0, sourceStart = 40, sourceEnd = 60;
var copiedBuffer = new Buffer(20);
buffer.copy(copiedBuffer,targetStart,sourceStart,sourceEnd);

for(var i=0;i<copiedBuffer.length;i++){
    console.log(copiedBuffer[i]);
}