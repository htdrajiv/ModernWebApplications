var fs = require("fs");
var path = require("path");
var dirName = "/MUM/ModernWebApplications/Assignment/Lecture3/FileExercises"
var fileName = path.join(dirName,"/NodeJs.txt");

// Exercise 1
var stats = fs.statSync(fileName,function(err,stats){
     if(err){
         return console.log(err);
     }
     return stats;
});

console.log("size of file = "+stats["size"]);

// Exercise 2
var buffer = new Buffer(1024);
fs.open(fileName,"r+",function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file is opened now!");
    fs.read(fd,buffer,0,buffer.length,0,function(err, bytes){
        if(err){
            return console.error(err);
        }
        if(bytes>14){
            let slice = buffer.slice(10,14);
            console.log(slice.toString());
        }
    })

    fs.close(fd,function(err){
        if(err){
            return console.error(err);
        }
        console.log("file is closed now!");
    })
})

// Exercise 3
var input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";
fs.writeFile(fileName,input,{encoding:'utf8'},function(err){
    if(err){
        return console.error(err);
    }
    console.log("file has been override successfully !");
})

// Exercise 4
fs.writeFile(fileName,"abc",{encoding:"utf8",mode:0666,flag:"a+"},function(err){
    if(err){
        console.error(err);
    }
    console.log("successfully appended the value abc");
})

// Exercise 5
fs.readFile(fileName,{encoding:"utf8"},function(err,fd){
    if(err){
        console.error(err);
    }
    fd = setCharAt(fd,10,"7");
    fs.writeFile(fileName,fd,{encoding:"utf8"},function(err){
        if(err){
            console.error(err);
        }
        console.log("successfully replace the byte at position 10 with 7");
    })
})

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}