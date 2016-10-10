var express = require('express');
var router = express.Router();
var inventors = require("../data/inventorsData");
var fs = require("fs");

/* GET inventors page. */
router.get('/', function(req, res) {
    inventors(res);  
});

module.exports = router;
