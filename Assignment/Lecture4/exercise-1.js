const http = require("http");
const url = require("url");
const queryString = require("querystring");
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;

function onRequest(req,res){
    const urlStr = req.url;
    const pathToFile = url.parse(urlStr).pathname;
    fs.readFile(pathToFile,{encoding:"utf8"},function(err,fd){
        if(err){
            console.error(err);
        }
        res.statusCode = 200;
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(fd);
    })
   
}

http.createServer(onRequest).listen(port,hostname,()=>{
    console.log(`server is running on ${hostname}:${port}`);
})



