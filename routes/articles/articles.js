
var Article = require('../../models/article');
var Comment = require('../../models/comment');

//******* GET ******** exporting this out to our index
exports.getAll = (req, res) => {
   Article.find()
          .populate('comments')
          .exec((err,data) => {
     if(err) throw err;
     res.send({data})
   })
}

//****** GET by ID *****
exports.getByID = (req, res) => {
  Article.findById(req.params.article_id)
    .populate('comments')
    .exec((err, data) => {
      if(err) throw err;
       res.send({data: data, message: "Found your article!"})
    })
}


//**** comments ******
//route JUST for posting comment. GET a specific article. POST a comment. POST new comment to article.
exports.makeComment = (req, res) => {
  Article.findById(req.params.article_id, (err, arty) => {//arty passes down below to .notes.push and .save
     if(err) throw err;
     const newComment = new Comment(); //need to create/save a comment to get an Id
     newComment.loadData(req.body); //there's the load method we defined earlier
     newComment.save((err, savedComment) => { //change the comment of the comment AFTER save
       if(err) throw err;
       arty.comments.push(savedComment);//if we pass this a comment object, it will go for THAT Id
       arty.save((err, savedArticle) => { //created this "new saved comment" in this function
         if(err) throw err;
         res.send({data: savedArticle})
       })
     })
   })
 }

//****** POST ********
exports.createArticle = (req, res) => {
  var newArticle = new Article();
  newArticle.loadData(req.body);
  newArticle.save(function(err,arty){
    if (err) throw err;
    res.json(arty);
  });
};

//***** DELETE ********
exports.removeArticle = (req, res) => {
  Article.remove({_id: req.params.article_id}, function (err){
    if(err){
      console.log(err)
    }else{
      Article.find(function(err, articles){
        if (err) res.json({error: err});//gives us an object to play with if it doesn't work.
                 res.send({message:"article successfully removed!", data: articles});
      });
    }
  });
};

//****** PUT *******
exports.updateArticle = (req, res) => {
 Article.findById(req.params.article_id, function(err, entry){
   if(!entry) return res.status(404).send(err, "Can't find that article");
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
