import React, {Component} from 'react';
import {browserHistory} from 'react-router';
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

      //(response.user._id && response.user.role === "te") for if else statements tomorrow.
    }).done((response) => (response.user._id) ? browserHistory.push('/SubscriberDashboard'):
      browserHistory.push(`/error/${response.message}`));
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
