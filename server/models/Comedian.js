const { Schema, model } = require('mongoose');

const comedianSchema = new Schema({
  comedianId: {
    type: String,
    required: true,
  },
  tech2: {
    type: Number,
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
});

const Comedian = model('Comedian', comedianSchema);

module.exports = Comment;
