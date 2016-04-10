// User Model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creating UserSchema
var UserSchema = new mongoose.Schema({
	user_name:String,
	date:String,
	time:String,
	comment:String
	// creating association to Appointment
	// appointment: [{type: Schema.Types.ObjectId, ref:'Appointment'}]
});

mongoose.model('User', UserSchema);