import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

//Need the import publishable and payment server url from instructions.
//import STRIPE_PUBLISHABLE from './stripe'
const STRIPE_PUBLISHABLE = "pk_test_3dtKojtGtSA9mCENapFXyVE3";
const PAYMENT_SERVER_URL = "/api/StripeGateway/PostPayment"

const CURRENCY = 'USD';

const fromDolToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDolToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDolToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;
