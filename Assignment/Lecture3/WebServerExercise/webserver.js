// Web Server Exercise 
var fs = require("fs");
var path = require("path");
var dirName = "/MUM/ModernWebApplications/Assignment/Lecture3/WebServerExercise"
var fileName = path.join(dirName,"/space.jpeg");

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// fs.readFile(fileName,function(err,data){
//     if(err){
//         console.error(err);
//     }
//     http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.writeHead(200,{'Content-Type':'image/jpeg'});        
//         res.end(data);
//     }).listen(port,hostname,()=>{
//         console.log(`server running at http://${hostname}:${port}`);
//     });
// })

http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200,{'Content-Type':'image/jpeg'});
    var readStream = fs.createReadStream(fileName);
    readStream.on('open', function (err) {
        if(err){
            console.error(err);
        }
        readStream.pipe(res);
    });
    readStream.on('end',(err)=>{
        if(err){
            console.error(err);
        }
        console.log("finished loading");
    })        
    // res.end(data);
}).listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});


