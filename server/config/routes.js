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
		user.newAppoint(req, res);
	})

	app.post('/delete_appointment/:id', function(req, res){
		user.deleting_appointment(req, res, req.params.id);
	})



};