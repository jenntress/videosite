const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_OMRr6iXlRFzjZWws7FKQGzic'
    : 'sk_test_OMRr6iXlRFzjZWws7FKQGzic';

const stripe = configureStripe(STRIPE_SECRET_KEY);

// const postStripeCharge = res => (stripeErr, stripeRes) => {
//   console.log(stripeRes,"stripeRes inside postStripeCharge");
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// }

//****POST****

// var charge = stripe.charges.create({
//   amount: 1000,
//   currency: "usd",
//   description: "Example charge",
//   source: token,
// }, function(err, charge) {
//   // asynchronously called
// });


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
