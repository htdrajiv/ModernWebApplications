var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;
var GeoJSON = require('geojson');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addLocation', { title: 'Express',errors:"" });
});

router.post('/save',function(req,res,next){
//   console.log(req.body);
  MongoClient.connect("mongodb://localhost:27017/lab9", function(err, db) {
        if (err) { return console.error(err); }
        var collection = db.collection('locations');
        var insertingObj = {
            name:req.body.name,
            category:req.body.category,
            latitude:req.body.latitude,
            longitude:req.body.longitude
        }

        var data = GeoJSON.parse(insertingObj, {Point: ['latitude', 'longitude']});
        collection.insert(data,function(err,insertedData){
            if(err) throw err;
            console.dir(`Success:${JSON.stringify(insertedData)}`);
            res.render('thankyou');
        })
    });
})

module.exports = router;
