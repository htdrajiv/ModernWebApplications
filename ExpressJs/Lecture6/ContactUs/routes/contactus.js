var express = require('express');
var router = express.Router();
var fs = require("fs");
var fileName = "./data/contactusInformation.json";

/* GET contactus page. */
router.get('/', function(req, res) {
    let errors="";
    if(req.query.errors){
        errors = JSON.parse(req.query.errors);
    } 
    res.render('contactus', { title: 'Express',errors:errors});
});

router.post("/saveMessage",function(req,res,next){
    req.assert('fullName',"FullName is required").notEmpty();
    req.assert('message',"Message is required").notEmpty();
    var errors = req.validationErrors();
        
    if(errors){
        res.redirect("/contactus?errors="+JSON.stringify(errors));
    } 
    else{
        var writeStream = fs.createWriteStream(fileName,{encoding:"utf8",mode:0666,flag:'a+'});
        let json = JSON.stringify(req.body);
        writeStream.end(json,function(){
            console.log("data has been written successfully!");
        });

        res.render("thankyou",{ msg: "Thank you"});  
    }
    
})

module.exports = router;