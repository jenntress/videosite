
import React, { Component } from 'react';
import $ from 'jquery';
import {EditCourse} from '../../components';


class EditCourseContainer extends Component {
  state = {
    isFetching: false,
    title: undefined,
    price: undefined,
    dateCreated: undefined,
    description: undefined,
    published: undefined
  }

  updateField = this.updateField.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  componentDidMount = () => this.loadCourse()

  updateField(fieldName, fieldValue) { //update each field at the same time with one function
    const newState ={};
      newState[fieldName] = fieldValue;
      this.setState(newState);
  }

  loadCourse() {
    $.ajax({
      url:`/api/courses/${this.props.params.courseId}`,
      method: 'GET'
    }).done(response => {
     // console.log("THIS CURRENT COURSE", response);
      this.setState({
        title: response.data.title,
        price: response.data.price,
        dateCreated: response.data.dateCreated,
        description: response.data.description,
        published: response.data.published,
        isFetching: true
      });
    })
  }

  handleSubmit(event){
      event.preventDefault();
    const data = {
      title: this.state.title,
      price: this.state.price,
      dateCreated: this.state.dateCreated,
      description: this.state.description,
      published: this.state.published
    }
    //  console.log("HERE IS THE DATA TO EDIT", data)

    $.ajax({
      url: `/api/courses/${this.props.params.courseId}`,
      method: 'PUT',
      data: data
    }).done(response => {
       console.log("HERE IS THE DATA THAT GOT UPDATED", response)
       window.location=`/SingleCourseView/${this.props.params.courseId}`
      })
  }


    render() {
      return (
        <div>
          { this.state.isFetching ?
            <EditCourse
              handleSubmit={this.handleSubmit}
              updateField={this.updateField}
              title={this.state.title}
              price={this.state.price}
              dateCreated={this.state.dateCreated}
              description={this.state.description}
              published={this.state.published}
              /> : <h3>Loading...</h3>
          }
        </div>
      )
    }
  }

  export default EditCourseContainer;
