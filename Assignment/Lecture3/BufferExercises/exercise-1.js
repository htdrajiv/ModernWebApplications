
var buffer = new Buffer(100);

for(var i=0;i<buffer.length;i++){
    buffer.writeUInt8(i,i);
}

for(var i=0;i<100;i++){
    console.log(buffer[i]);
}