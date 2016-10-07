const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const url = require("url");
const hostname = '127.0.0.1';
const port = 3000;

function onRequest(req,res){
    let postData;
    let formData;
    let urlStr = req.url;
    let pathToFile = url.parse(urlStr).pathname;
    req.setEncoding("utf8");
    req.addListener("data",function(postDataChunk){
        postData += postDataChunk;
    })
    
    req.addListener("end",function(){
        formData = queryString.parse(postData).text;
        fs.writeFile(pathToFile,formData,{encoding:'utf8',mode:0666,flag:"a+"},function(err){
            if(err){
                console.error(err);
            }
            console.log("Post data has been written to file "+pathToFile);
        })
        console.log(formData);
    })    
    
    res.end("Ok");
}

http.createServer(onRequest).listen(port,hostname,()=>{
    console.log(`server is live now on ${hostname}:${port}`);
})