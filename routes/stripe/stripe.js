const configureStripe = require('stripe');
const User = require('../../models/user');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_OMRr6iXlRFzjZWws7FKQGzic'
    : 'sk_test_OMRr6iXlRFzjZWws7FKQGzic';

const stripe = configureStripe(STRIPE_SECRET_KEY);

exports.addCourseToUser = (req, res) => {
  User.findById(req.user._id, function(err, user){
    if(!user) return res.status(404).send(err, "Can't find that user!");
      user.paidCourses.push(req.body.course)
      user.save(function(err){
        if(err){
          res.status(500).send(err);
        }else{
          res.json(user);
        }
      })
  })
}

exports.cartCheckout = (req, res) => {
  console.log(req.body, "Req.body inside cartCheckout");
  stripe.charges.create(req.body, function(err, charge){
    if (err){
      console.log("No Good! Err: ", err);
    } else {
      console.log("Success! ", charge);
    }
  });
}
