//Socket.io code
module.exports = function(io) {
	io.on('connection', function(socket) {
		socket.emit("connectMessage", "user connected");

		//Handles when a particular functin is called
		socket.on('message', function(msg) {
		  var GamerScore = Parse.Object.extend("GameScore");
		  var gamerScore = new GamerScore();
		  gamerScore.set("score", 10000);
		  gamerScore.set("playerName", "Peter Parker");
		  gamerScore.set("cheatMode", false);
		  gamerScore.save(null, {
				success: function(gamerScore) {
					socket.emit("connectMessage", "Parker Saved");
				},
				error: function(gamerScore, error) {
					socket.emit("connectMessage", "Error");
				}
		  });
			//socket.emit('connectMessage', 'Message sent from client: ' + msg);	
		});

		//Handles when a user disconnects
		socket.on('disconnect', function(data) {
			console.log('user disconnected');
		});
	});

};
