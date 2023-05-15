const { Schema, model } = require('mongoose');

const showSchema = new Schema({
	date: {
		type: String,
		required: true,
		unique: true,
		maxlength: 50,
		trim: true,
	},
	city: {
		type: String,
		required: true,
	},
	venue: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	comedian: {
		type: Schema.Types.ObjectId,
		ref: 'Comedian',
		required: true,
	},
});

const Show = model('Show', showSchema);

module.exports = Show;
