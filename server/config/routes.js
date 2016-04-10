// Routes

// require topic controller
var user = require('./../controllers/users.js');





module.exports = function(app){

	// GETS ===========================================








	// POSTS ===========================================
	app.post('/new_appoint/', function(req, res){
		user.newAppoint(req, res);
	})



};