var buffer = new Buffer(100);

for(var i=0;i<buffer.length;i++){
    buffer.writeUInt8(i,i);
}

var slice = buffer.slice(40,60);

for(var i=0;i<slice.length;i++){
    console.log(slice[i]);
}