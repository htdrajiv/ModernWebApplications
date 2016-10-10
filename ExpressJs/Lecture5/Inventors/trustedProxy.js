var express = require('express');
var app = express();
var httpProxy = require("http-proxy");
var apiProxy = httpProxy.createProxyServer();
var targetServer = "http://127.0.0.1:3001";

// some app configurations
app.enable("case sensitive routing");
app.disable("x-powered-by");
app.enable("strict routing");

app.all("/*",function(req,res){
    console.log("redirecting to targetServer");
    apiProxy.web(req,res,{target:targetServer});
});

app.listen(3000);