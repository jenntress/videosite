const Lesson = require('../../models/lesson');

//****** POST ********
exports.createLesson = (req, res) => {
  var newLesson = new Lesson();
  newLesson.loadData(req.body);
  newLesson.save(function(err,lesson){
    if (err) throw err;
    res.json(lesson);
  });
};

//******GET****** exporting this out to our index
exports.getAll = (req, res) => {
	Lesson.find()
		  .exec((err, data) => {
		  	if (err) throw err;
		  	res.send({data})
		  })
}

exports.getById = (req, res) => {
	Lesson.findById(req.params.lesson_id)
		  .exec((err, data) => {
		  	if(err) throw err;
		  		res.send({data: data, message: "Found your lesson!"})
		  })
}

//****** PUT *******
exports.updateLesson = (req, res) => {
 Lesson.findById(req.params.lesson_id, function(err, entry){
   if(!entry) return res.status(404).send(err, "Can't find that lesson");
   entry.loadData(req.body);
   entry.save(function(e){
     if(e){
       res.status(500).send(e);
     }else{
       res.json(entry);
     }
   });
 });
};

//***** DELETE ********
exports.removeLesson = (req, res) => {
  Lesson.remove({_id: req.params.lesson_id}, function (err){
    if(err){
      console.log(err)
    }else{
      Lesson.find(function(err, lesson){
        if (err) res.json({error: err});//gives us an object to play with if it doesn't work.
                 res.send({message:"Lesson successfully removed!", data: lesson});
      });
    }
  });
};
