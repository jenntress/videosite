import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

//Need the import publishable and payment server url from instructions.
//import STRIPE_PUBLISHABLE from './stripe'
const STRIPE_PUBLISHABLE = "pk_test_3dtKojtGtSA9mCENapFXyVE3";
const PAYMENT_SERVER_URL = "/api/StripeGateway/PostPayment";
const SUCCESS_SERVER = "/api/PaymentSuccess";


const CURRENCY = 'USD';

const fromDolToCent = amount => amount * 100;

const successPayment = course => {
  axios.post(SUCCESS_SERVER, {course : course})
  .then(console.log("Success post to stripe addCourseToUser"))
};

const errorPayment = data => {
  console.log("Sorry didnt charge.");
};

const onToken = (amount, description, course) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDolToCent(amount),
    })
    .then(successPayment(course))
    .catch(errorPayment);


const Checkout = ({ name, description, amount, course }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDolToCent(amount)}
    course={course}
    token={onToken(amount, description, course)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;
