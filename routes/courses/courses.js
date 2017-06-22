const Course = require('../../models/course');

//****** POST ********
exports.createCourse = (req, res) => {
  var newCourse = new Course();
  newCourse.loadData(req.body);
  newCourse.save(function(err,course){
    if (err) throw err;
    res.json(course);
  });
};

//******GET****** exporting this out to our index
exports.getAll = (req, res) => {
	Course.find()
      .populate('lessons')
		  .exec((err, data) => {
		  	if (err) throw err;
		  	res.send({data})
		  })
}

exports.getById = (req, res) => {
	Course.findById(req.params.course_id)
      .populate('lessons')
		  .exec((err, data) => {
		  	if(err) throw err;
		  		res.send({data: data, message: "Found your course!"})
		  })
}

//****** PUT *******
exports.updateCourse = (req, res) => {
 Course.findById(req.params.course_id, function(err, entry){
   if(!entry) return res.status(404).send(err, "Can't find that course");
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
exports.removeCourse = (req, res) => {
  Course.remove({_id: req.params.course_id}, function (err){
    if(err){
      console.log(err)
    }else{
      Course.find(function(err, course){
        if (err) res.json({error: err});//gives us an object to play with if it doesn't work.
                 res.send({message:"Course successfully removed!", data: course});
      });
    }
  });
};


