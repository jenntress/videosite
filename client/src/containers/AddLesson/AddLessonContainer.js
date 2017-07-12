import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {AddLesson} from '../../components';
import $ from 'jquery';

class AddLessonContainer extends Component {
  state={
    title: undefined,
    sequence: undefined,
    videoURL: undefined,
    objective: undefined,
    archived: undefined,
    published: undefined,
    course:undefined,
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
               (this.state.sequence !== undefined) &&
               (this.state.videoURL !== undefined) &&
               (this.state.objective !== undefined)
      })
    }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit(event){
        event.preventDefault()
        alert('Lesson Added!')

    const data={
      title: this.state.title,
      sequence: this.state.sequence,
      videoURL: this.state.videoURL,
      objective: this.state.objective,
      published: this.state.published,
      archived: this.state.archived,
      course: this.props.params.courseId
    }
console.log(data);
    $.ajax({
      url:`/api/lessons/${this.props.params.courseId}`,
      method: 'POST',
      data: data
    }).done((response) => {
      console.log(response)
      browserHistory.push(`/SingleCourseView/${this.props.params.courseId}`)
    })
 }


  render (){
    return (
      <div>
        <AddLesson
           handleSubmit={this.handleSubmit}
           onChange={this.onChange}
           valid={this.state.valid}
        />
      </div>
    )
  }

}

export default AddLessonContainer;
