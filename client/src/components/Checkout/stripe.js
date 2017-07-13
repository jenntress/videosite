const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'acct_1032D82eZvKYlo2C'
  : 'acct_1032D82eZvKYlo2C';

export default STRIPE_PUBLISHABLE;
