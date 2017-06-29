import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import {Login} from '../../components';

class LoginContainer extends Component{
  state = {
    email: undefined,
    password: undefined,
    role: undefined
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
      password: this.state.password,
      role: this.state.role
    }
    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: local

    }).done((response) => {
    						console.log(response);
    					  (response.user._id && response.user.local.role === "teacher") ? 
    					   browserHistory.push('/TeacherDashboard') : 
    					   (response.user._id && response.user.local.role === "subscriber") ?
    					   browserHistory.push('/SubscriberDashboard') :
      					   browserHistory.push(`/error/${response.message}`)});
  }
  render(){
    return(
      <Login
        updateField = {this.updateField}
        handleSubmit = {this.handleSubmit}
      />
    )
  }
}
export default LoginContainer;
