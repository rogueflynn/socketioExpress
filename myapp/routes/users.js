var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var test = "sup";
	var arr = []; 
	var GameScore = Parse.Object.extend('GameScore');
	var query = new Parse.Query(GameScore);
	query.find({
		success: function(results) {
			for(var i = 0; i < results.length; i++) {
				arr.push(results[i].get('playerName'));
			}
			res.io.emit("socketToMe", arr);
		}, 
		error: function(error) {
			//res.redirect('/users');
		}
	});
  	res.send('respond with a resource');
});

module.exports = router;
