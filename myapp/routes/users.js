var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var test = "sup";
	var arr = ["John", "Victor", "Emily"]; 
	res.io.emit("socketToMe", arr);
  	res.send('respond with a resource');
});

module.exports = router;