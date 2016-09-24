var express = require('express');
var Parse = require('parse/node').Parse;
var router = express.Router();

Parse.initialize('app','master');
Parse.serverURL = 'http://localhost:3000/parse';  // Don't forget to change to https if needed

/* GET home page. */
router.get('/', function(req, res, next) { 

/*
  var GamerScore = Parse.Object.extend("GameScore");
  var gamerScore = new GamerScore();
  gamerScore.set("score", 9000);
  gamerScore.set("playerName", "Emily Maynard");
  gamerScore.set("cheatMode", false);
  gamerScore.save(null, {
		success: function(gamerScore) {
			res.render("index", {title: gamerScore});	
 		},
		error: function(gamerScore, error) {
			res.redirect('/users');
		}
  });*/ 
  var GameScore = Parse.Object.extend('GameScore');
  var query = new Parse.Query(GameScore);
  query.find({
	success: function(results) {
		res.render("index", {
					title: "Express",
					Results: results
		}); 
        }, 
        error: function(error) {
		res.redirect('/users');
        }
  });
/*
  query.find({userMasterKey: true}).then(function(results) {
		res.render("index", {
					title: "Express",
					Results: results 
		}); 
  });*/

  /*
  Parse.User.logIn("Victor", "emily", {
	success: function(user) {
		res.redirect('/users');
	},
	error: function(user, error) {
	}	
  });
  */
});

module.exports = router;
