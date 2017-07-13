import React, {Component} from 'react';
import $ from 'jquery';
import {SignUp} from '../../components';

class SignUpContainer extends Component {

  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    role: undefined
  }

  updateField = this.updateField.bind(this)
  updateField(field, value) {
    const newState = {};
    newState[field] = value;
    this.setState(newState); //new state is an object that we just created
   }

	handleSubmit = this.handleSubmit.bind(this) //bind functions FIRST so that you don't forget
	  handleSubmit(event){ //this is  function
	    event.preventDefault();//this is a method (not a property of an object)
	    console.log('STATE IS NOW: ', this.state);
	    const local = {email: this.state.email,
                     password: this.state.password,
                     role: this.state.role,
                     firstName: this.state.firstName,
                     lastName: this.state.lastName};

      $.ajax({
	      url: '/api/signup',
	      method: 'POST',
	      data: local
	    }).done((response) => (
	      console.log("SUCCESS AT SIGN UP")) ||
	      (response._id) ? //users have to go back to the login page
	      window.location='/login' :
	      window.location=`/err/${response.message}`);
	  }

  render(){
    return(
      <div>
        <SignUp updateField={this.updateField}  handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default SignUpContainer;
