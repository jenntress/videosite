import React from 'react';
import {Link} from 'react-router';

const SignUp = (props) => (
 <div className="container">
    <h3>New User Sign Up</h3>
      <form>
        <label>I am a...</label>
        <select onChange={(event) => props.updateField('role', event.target.value)}>
        	<option value="">Nothing</option>
        	<option value="teacher">Teacher</option>
        	<option value="subscriber">Subscriber</option>
        </select>

        <label>First Name</label>
        <input type='text' className="form-control" placeholder="first name"
         onChange={(event) => props.updateField('firstName', event.target.value)}/>

         <label>Last Name</label>
        <input type='text' className="form-control" placeholder="last name"
         onChange={(event) => props.updateField('lastName', event.target.value)}/>

        <label>Email</label>
        <input type='email' className="form-control" placeholder="email address"
         onChange={(event) => props.updateField('email', event.target.value)}/>

        <label>Password</label>
        <input type='password' className="form-control" placeholder="password"
         onChange={(event) => props.updateField('password', event.target.value)}/>

        <button type="button" className="btn btn-success"
          onClick={(event) => props.handleSubmit(event)}>Sign Up</button>
        <Link className="btn btn-default" to={'/login'}>Returning User &gt; Login</Link>
       </form>
 </div>
)

export default SignUp;
