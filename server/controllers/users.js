// User Controller

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){

	return{
		// creating new appointments
		newAppoint: function(req, res){
			console.log(req.body.user_name);
			console.log(req.body.date);
			// check so see if user name and date already exists use req.body
			User.find({ user_name:req.body.user_name, date:req.body.date }, function(err, results){
				

				// HOW TO RETURN ERROR MESSAGE FROM HERE BACK TO HTML????


				// if user found
				if(results.length != 0){
					console.log('User and appointment date already exists, cannot add appointment');
					// return res.json(err);
				}
				// if not found, add the data
				else{
					console.log('Successfully added appointment!');
					// storing appointments into database
					User.create({
						user_name:req.body.user_name,
						date:req.body.date,
						time:req.body.time,
						comment:req.body.comment
					})
				}
			})	
		},


		// get all appointments
		getAllAppoints: function(req, res){
			User.find({}, function(err, results){
				if(err){
					console.log('Error getting Data');
				}
				else{
					res.json(results);
				}
			})
		},



		// deleting appointment
		deleting_appointment: function(req, res, id){
			User.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log('Not able to delete');
				}
				else{
					console.log('Deleted Successfully');
				}
			})
		}










	} // end return

})(); // end module.exports



