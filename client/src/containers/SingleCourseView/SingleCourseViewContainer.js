import React, {Component} from 'react';
import {SingleCourseView, SingleLessonView} from '../../components';
import $ from 'jquery';

class SingleCourseViewContainer extends Component {

  state = {
     isFetching: true,
     id: undefined,
     title: undefined,
     description: undefined,
     price: undefined,
     lessons: undefined
   }

   loadCourse = this.loadCourse.bind(this)
   componentDidMount = () => this.loadCourse()

     loadCourse(){
         //   console.log(this.props);
       $.ajax({
         url: `/api/courses/${this.props.params.courseId}`,
         method: 'GET'
       }).done((response) => {
          console.log("CURRENT COURSE", response); //log this "response" (from the .done) course in the console
         this.setState({
           id: response.data._id, //_id (underscore) is for mongoose
           title: response.data.title,
           description: response.data.description,
           price: response.data.price,
           lessons: response.data.lessons,
           isFetching: false
         });
         console.log("THESE ARE MY LESSONS", this.state.lessons)
       });
     }

  render(){
    return (
      <div>
      { !this.state.isFetching ?
       <SingleCourseView
         id={this.state.id}
         title={this.state.title}
         description={this.state.description}
         price={this.state.price}
         lessons={this.state.lessons}
         /> : <h3>Loading...</h3>
      }
      </div>
    )
  }
}

export default SingleCourseViewContainer;
