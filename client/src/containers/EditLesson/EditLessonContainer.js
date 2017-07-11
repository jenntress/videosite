import React, { Component } from 'react';
import $ from 'jquery';
import { EditLesson } from '../../components';

class EditLessonContainer extends Component {

  state = {
    isFetching: false,
    id: undefined,
    title: undefined,
    //course: undefined,
    sequence: undefined,
    videoURL: undefined,
    objective: undefined,
    archived: undefined,
    published: undefined
  }

  updateField = this.updateField.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  componentDidMount = () => this.loadLesson()

  updateField(fieldName, fieldValue) {
    const newState ={};
      newState[fieldName] = fieldValue;
      this.setState(newState);
  }

  loadLesson() {
    $.ajax({
      url:`/api/lessons/${this.props.params.lessonId}`,
      method: 'GET'
    }).done(response => {
      this.setState({
        id:response.data._id,
        title: response.data.title,
        sequence: response.data.sequence,
        videoURL: response.data.videoURL,
        objective: response.data.objective,
        archived: response.data.objective,
        published: response.data.published
      });
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      sequence: this.state.sequence,
      videoURL: this.state.videoURL,
      objective: this.state.objective,
      archived: this.state.archived,
      published: this.state.published
    }
    console.log("Here is the lesson data to edit", data);

    $.ajax({
      url: `/api/lessons/${this.props.params.lessonId}`,
      method: 'PUT',
      data: data
    }).done(response => {
      console.log("Here is the lesson data that got updated", response)
      window.location=`/SingleLessonView/${this.props.params.lessonId}`
    })
  }

  render(){
    return (
      <div>
        { this.state.isFetching ?
          <EditLesson
           handleSubmit={this.handleSubmit}
           updateField={this.updateField}
           id={this.state.id}
           title={this.state.title}
           sequence={this.state.sequence}
           videoURL={this.state.videoURL}
           objective={this.state.objective}
           archived={this.state.archived}
           published={this.state.published}
           /> : <h3> Loading... </h3>
        }
      </div>
    )
  }
}

export default EditLessonContainer;
