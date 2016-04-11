// User Controller

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){

	return{
		// creating new appointments
		newAppoint: function(req, res){
			// check so see if user name and date already exists use req.body
			User.find({ user_name:req.body.user_name, date:req.body.date }, function(err, results){
				// get the date count
				User.count({date:req.body.date}, function(err, count){
					console.log(count);

					// if the date count is 3 or greater
					if(count >= 3){
						return res.json({error:"The date you have chose has already been filled up, please chose another date"});
					}
					// if date count is less then 3
					else{
						// if user is FOUND
						if(results.length != 0){
							console.log('User and appointment date already exists, cannot add appointment');
							return res.json({error:"This user has already made an appointment for today."});
						}
						// if NOT FOUND, add the data
						else{
							console.log('Successfully added appointment!');

							// storing appointments into database
							User.create({
								user_name:req.body.user_name,
								date:req.body.date,
								time:req.body.time,
								comment:req.body.comment
							})

							return res.json({error:"Successfully added appointment"});
						}
					}
				}) // end User.count
			}) // end User.find
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



