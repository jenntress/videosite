import React from 'react';
import {Link} from 'react-router';

const Login = (props) => {
  return (
    <div className="container">
      <h3>Hello from Login</h3>
      <div>
        <label> Email </label>
        <input type="email" className="form-control" onChange={(event) =>
          props.updateField("email", event.target.value)} />
      </div>
      <div>
        <label> Password </label>
        <input type="password" className="form-control" onChange={(event) =>
        props.updateField("password", event.target.value)} />
      </div>
      <div>
        <button className="btn btn-primary" type="button" onClick={(event) =>
        props.handleSubmit(event)}> Login! </button>
        <Link className="btn btn-default" to={'/signup'}>Sign Up</Link>
      </div>
    </div>
  )
}

export default Login;
