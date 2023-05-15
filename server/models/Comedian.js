const { Schema, model } = require('mongoose');


const comedianSchema = new Schema({
	first_name: {
		type: String,
		required: true,
		maxlength: 50,
		trim: true,
	},
	last_name: {
		type: String,
		required: true,
		maxlength: 50,
		trim: true,
	}
});

const Comedian = model('Comedian', comedianSchema);

module.exports = Comedian;
