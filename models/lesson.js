const mongoose = require('mongoose');

var LessonSchema = new mongoose.Schema({
  title: String,
  sequence: Number,
  videoURL: String,
  objective: String,
  markedComplete: Boolean,
  archived: Boolean,
  published: Boolean
});

LessonSchema.methods.loadData = function(data){
  this.title = data.title ? data.title : this.title;
  this.sequence = data.sequence ? data.sequence : this.sequence;
  this.videoURL = data.videoURL ? data.videoURL : this.videoURL;
  this.objective = data.objective ? data.objective : this.objective;
  this.markedComplete = data.markedComplete ? data.markedComplete : this.markedComplete;
  this.archived = data.archived ? data.archived : this.archived;
  this.published = data.published ? data.published : this.published;

};

module.exports = mongoose.model('Lesson', LessonSchema);
