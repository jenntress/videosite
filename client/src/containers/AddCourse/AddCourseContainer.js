import React, {Component} from 'react';
import {AddCourse} from '../../components';
import $ from 'jquery';

class AddCourseContainer extends Component {
  state={
    title: undefined,
    price: undefined,
    dateCreated: undefined,
    description: undefined,
    published: undefined,
    valid: false
  }

    updateField(name, value){
      const newState={};
      newState[name]=value;
      this.setState(newState);
    }

    onChange = this.onChange.bind(this);
    onChange(name, value){
      this.updateField(name, value);
      this.validate();
    }
    validate(){
      this.setState({
        valid: (this.state.title !== undefined) &&
               (this.state.price !== undefined) &&
               (this.state.dateCreated !== undefined) &&
               (this.state.description !== undefined) &&
               (this.state.published !== undefined)
      })
    }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit(event){
        event.preventDefault()
        alert('Course Added!')

    const blurb={
      title: this.state.title,
      price: this.state.price,
      dateCreated: this.state.dateCreated,
      description: this.state.description,
      published: this.state.published
    }
console.log(blurb);
    $.ajax({
      url:'/api/courses',
      method: 'POST',
      data: blurb
    }).done((response) => {
      console.log(response)
      
    })
 }


  render (){
    return (
      <div>
        <AddCourse
           handleSubmit={this.handleSubmit}
           onChange={this.onChange}
           valid={this.state.valid}
        />
      </div>
    )
  }

}

export default AddCourseContainer;
