// Routes

// require topic controller
var user = require('./../controllers/users.js');





module.exports = function(app){

	// GETS ===========================================
	app.get('/get_appoints/', function(req, res){
		user.getAllAppoints(req, res);
	})







	// POSTS ===========================================
	app.post('/new_appoint', function(req, res){
		console.log('printing from the routesjs');
		console.log(req.body);
		user.newAppoint(req, res);
	})



};