var express = require('express');
var router = express.Router();
var crypto = require("crypto");
var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;

/* GET decryptor page. */
router.get('/', function(req, res) {
    getData(res);
});

var getData = function(res){    
    MongoClient.connect("mongodb://localhost:27017/lab7Assignment", function(err, db) {
        if (err) { return console.error(err); }
        var collection = db.collection('encrypted');
        collection.findOne({ message: new RegExp(".*")}, function(err, doc) {
            if (err) { return console.error(err); }  
            // console.log(decrypt(doc.message));
            res.render('index', { title: 'Express',decrypted:decrypt(doc.message)});          
        })
    });
}

function decrypt(data) {
    let decipher = crypto.createDecipher('aes256', 'asaadsaad');
    return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
}


module.exports = router;