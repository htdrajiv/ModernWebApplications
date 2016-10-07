// Exercise 1
var buffer = new Buffer(100);

for(var i=0;i<buffer.length;i++){
    buffer.writeUInt8(i,i);
}

for(var i=0;i<100;i++){
    console.log(buffer[i]);
}

// Exercise 2
var slice = buffer.slice(40,60);

for(var i=0;i<slice.length;i++){
    console.log(slice[i]);
}

// Exercise 3
var targetStart = 0, sourceStart = 40, sourceEnd = 60;
var copiedBuffer = new Buffer(20);
buffer.copy(copiedBuffer,targetStart,sourceStart,sourceEnd);

for(var i=0;i<copiedBuffer.length;i++){
    console.log(copiedBuffer[i]);
}