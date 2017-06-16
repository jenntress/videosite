//  blog/models/article.js       (this is our blueprint, our "Schema")

var mongoose = require('mongoose');


var ArticleSchema = new mongoose.Schema({
    title: { required: true, type: String },
    content: String,
    category: String,
    img: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

ArticleSchema.methods.loadData = function(data){
  this.title     = data.title ? data.title : this.title;
  this.content   = data.content ? data.content : this.content;
  this.category  = data.category ? data.category : this.category;
  this.img       = data.img ? data.img : this.img;
}

module.exports = mongoose.model('Article', ArticleSchema);
