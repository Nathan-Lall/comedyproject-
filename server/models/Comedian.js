const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment')

const comedianSchema = new Schema({
  name: {
   type: String,
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
  comments: [
    commentSchema,
  ],
  //must save the comedian itself, cannot just save new comment
  // on the server, will not comment.create, comedian.update(jerrysienfeld) or whatever 
});

const Comedian = model('Comedian', comedianSchema);

module.exports = Comedian;
