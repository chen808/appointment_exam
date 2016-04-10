// Appointment Model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creating AppointSchema
var AppointSchema = new mongoose.Schema({
	date:String,
	time:String,
	comment:String,
	// referencing User Model
	_user: {type: Schema.Types.ObjectId, ref:'User'}
});

mongoose.model('Appoint', AppointSchema);