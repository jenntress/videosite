const mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
	title: String,
	price: Number,
	dateCreated: Date,
	description: String,
	published: Boolean,
	lessons: [{type: mongoose.Schema.Types.ObjectId, 
				ref: 'Lesson'}]
}); 

CourseSchema.methods.loadData = function(data){
	this.title = data.title ? data.title : this.title;
	this.price = data.price ? data.price : this.price;
	this.dateCreated = data.dateCreated ? data.dateCreated : this.dateCreated;
	this.description = data.description ? data.description : this.description;
	this.published = data.published ? data.published : this.published;
};

module.exports = mongoose.model('Course', CourseSchema);