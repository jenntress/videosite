

const User = require('../models/user');

module.exports = function(app, passport){

//****** SIGN UP ********
  app.post('/api/signup', function(req, res, next){
    console.log('FOUND SIGNUP ROUTE');
    const authenticator = passport.authenticate('local-signup', function(err, user, info){
      if(err) return next(err); //res.send sends back anything you want (not just raw json specific data)
      if(!user){
        return res.status(404).json(info.message) //"user name already taken" AND "blank username"
      } else {
        user.save(function(err){
          if(err) throw err;  //this is a mongoose error (this stops the program from working)
          console.log("USER SUCCESSFULLY SAVED");
          req.logIn(user, function(err){
            if(err) res.json({error: err.message});
            return res.json(user);
          })
        })
      }
    })
    authenticator(req, res, next);
  });


  //***** GET USER ********
    app.get('/api/get_user', function(req, res, next){ //endpoint makes more sense as "get_user" rather than "login"
      if(req.user){ //only exists (part of the req object) if someone has successfully logged in
        console.log('user IS logged in');
        res.json({user: req.user, isAuthed: true}) //if the user is in, show them
      } else { //otherwise user gets an error (pop up message) and can't login
        console.log('NOT logged in');
        res.json({
          isAuthed: false,
          message: 'You are not logged in!'
        })
      }
    });

    //****** LOG IN (SIGN IN)*******
      app.post('/api/login', function(req, res, next){
        //this is another way of passing in a required module its arguments for a given method
        const authenticator = passport.authenticate('local-login', function(err, user, info){
          if(err) res.json({error: err.message});
          if (!user){
            return res.status(404).json(info.message); //info is an object
          }
          req.logIn(user, function(err){
            if(err) res.json({error: err.message}); //uses json to send back error to client
            
            return res.json({
              message: 'Successfully logged in. Welcome back!',
              user: user
            })
          })
        })
        authenticator(req, res, next);// set function equal to a variable above, then call this function here
      });



  //****** LOG OUT *******
    //every route we create has to be inside this module.exports function
    app.get('/api/logout', function (req, res, next){ //do this one first
      req.session.destroy();
      return res.json({//this is a method!
        loggedOut: 'Successfully logged out! Bravo!'
      })
    });



}//this ends the module.exports function
