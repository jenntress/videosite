import React, {Component} from 'react';
import $ from 'jquery';
import {Login} from '../../components';

class LoginContainer extends Component{
  state = {
    email: undefined,
    password: undefined
  }
  updateField = this.updateField.bind(this);
  updateField(field, value){
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  handleSubmit = this.handleSubmit.bind(this);
  handleSubmit(event){
    event.preventDefault();
    console.log('state is now:', this.state);
    const local = {
      email: this.state.email,
      password: this.state.password
    }
    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: local

    }).done((response) => {
    						 (response.user._id && response.user.local.role === "teacher") ?
    					   window.location='/TeacherDashboard' :
    					   (response.user._id && response.user.local.role === "subscriber") ?
    					   window.location='/SubscriberDashboard' :
      					 window.location=`/error/${response.message}`});
  }
  render(){
    return(
      <Login
        updateField={this.updateField}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
export default LoginContainer;
