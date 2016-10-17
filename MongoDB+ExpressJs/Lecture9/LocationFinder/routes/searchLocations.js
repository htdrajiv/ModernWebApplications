var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;

router.get('/', function(req, res) {
    MongoClient.connect("mongodb://localhost:27017/lab9", function(err, db) {
        if (err) { return console.error(err); }
        var collection = db.collection('locations');
        console.log(req.query['latitude']);
        console.log(req.query['longitude']);
        var query = {location:{$near:{$geometry:{type:"point", coordinates:[req.query['longitude'],req.query['latitude']]}, $maxDistance:2000}}};
        console.log(collection.find(query).$geometry);
        collection.find(query,(err,doc)=>{
            if(err) throw err;
            res.render('searchedLocations', { title: 'Express',searchedLocations:doc });
        })
    });  
});

module.exports = router;