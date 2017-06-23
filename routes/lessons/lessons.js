const Lesson = require('../../models/lesson');
const Course = require('../../models/course');

//****** POST ********
//route JUST for posting lessons to a course. GET a specific course. POST a lesson. POST new lesson to course.
exports.createLesson = (req, res) => {
  Course.findById(req.params.course_id, (err, course) => {
     const newLesson = new Lesson(); 
     newLesson.loadData(req.body); 
     newLesson.save((err, savedLesson) => { 
       if(err) throw err;
       course.lessons.push(savedLesson);
       course.save((err, savedCourse) => { 
         if(err) throw err;
         res.send({data: savedCourse})
       })
     })
   })
 }

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
