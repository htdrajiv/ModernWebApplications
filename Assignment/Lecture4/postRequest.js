// npm install request 
var request = require('request');
var postRequest = request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'http://127.0.0.1:3000/MUM/ModernWebApplications/Assignment/Lecture4/myFile.txt',
  form:    { text: "my text msg" }
},function(error, response, body){
    console.log(body);
});

