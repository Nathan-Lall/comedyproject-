const { Schema } = require('mongoose');

const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    required: true,
  },
//   // grab ID from Comedian
//   comedianId: {
//     type: Types.ObjectId,
//     required: true,
//   },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
});

// const Comment = model('Comment', commentSchema);

module.exports = commentSchema;
