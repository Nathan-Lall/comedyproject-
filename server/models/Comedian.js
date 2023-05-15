const { Schema, model } = require('mongoose');
const ShowsSchema = require('./Shows')



const comedianSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      trim: true,
    },
    DOB: {
      type: String,
      required: true
    },
    shows: {
      type: Schema.Types.ObjectId,
      default: "shows",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



const comedian = model('comedian', comedianSchema);

module.exports = User;