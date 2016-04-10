// User Controller

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){

	return{

		newAppoint: function(req, res){
			console.log(req.body.user_name);
			console.log(req.body.date);
			// check so see if user name and date already exists use req.body
			User.find({ user_name:req.body.user_name, date:req.body.date }, function(err, results){
				console.log('omg=====');
				console.log(err);



				// HOW TO RETURN ERROR MESSAGE FROM HERE BACK TO HTML????


				// if user found
				if(results.length != 0){
					console.log('User and appointment date already exists, cannot add appointment');
					// return res.json(err);
				}
				// if not found, add the data
				else{
					console.log('Successfully added appointment!');

					User.create({
						user_name:req.body.user_name,
						date:req.body.date, time:req.body.time,
						comment:req.body.comment
					})
				}



			})
			
		}











	} // end return

})(); // end module.exports



