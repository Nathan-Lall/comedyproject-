const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  timeStamp: {
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

const Comment = model('Comment', commentSchema);

module.exports = Comment;
