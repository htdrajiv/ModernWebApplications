var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// var inventors = require("./data/inventors.js");

// /* GET inventors page. */
// router.get('/inventors', function(req, res, next) {
//   res.render('inventors', inventors());
// });

module.exports = router;
