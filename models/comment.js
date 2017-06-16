// blog/models/comment.js
// an article has comments - this is a one-to-many relationship


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {required: true, type: String}
});

CommentSchema.methods.loadData = function(data){
  this.content = data.content;
}

module.exports = mongoose.model('Comment', CommentSchema);
