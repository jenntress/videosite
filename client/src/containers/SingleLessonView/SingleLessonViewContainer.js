import React, {Component} from 'react';
import {SingleLessonView} from '../../components';
import $ from 'jquery';

class SingleLessonViewContainer extends Component {

	state = {
		isFetching: true,
		//courseId: undefined,
		lessonId: undefined,
		title: undefined,
		sequence: undefined,
		videoURL: undefined,
		objective: undefined,
		markedComplete: undefined,
		archived: undefined,
		published: undefined,
		course: undefined
	}

	loadLesson = this.loadLesson.bind(this)
	componentDidMount = () => this.loadLesson();

	loadLesson(){
		$.ajax({
			url: `/api/lessons/${this.props.params.lessonId}`,
			method: 'GET'
		}).done((response) => {
		   console.log('CURRENT LESSON', response);
		   this.setState({
		   		lessonId: response.data._id,
		   		title: response.data.title,
		   		sequence: response.data.sequence,
		   		videoURL: response.data.videoURL,
		   		objective: response.data.objective,
		   		markedComplete: response.data.markedComplete,
		   		archived: response.data.archived,
		   		published: response.data.published,
					course: response.data.course,
		   		isFetching: false
		   });
		});
	}

  render(){
    return (
      <div>
	      { !this.state.isFetching ?
	       <SingleLessonView
		   		lessonId={this.state.lessonId}
		   		title={this.state.title}
					videoURL={this.state.videoURL}
					sequence={this.state.sequence}
					objective={this.state.objective}
					markedComplete={this.state.markedComplete}
					archived={this.state.archived}
					published={this.state.published}
					course={this.state.course}
	       /> : <h3>Loading...</h3>
	      }
      </div>
    )
  }
}

export default SingleLessonViewContainer;
