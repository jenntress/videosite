import React, {Component} from 'react';
import {CourseList} from '../../components';
import $ from 'jquery';


class CourseListContainer extends Component {
  state = {
    courses: undefined
  }

componentDidMount = () => this.loadCourses()// react lifecycle component

  loadCourses(){
    $.ajax({
      url: '/api/courses',
      method: 'GET'
    }).done((response) => {
    console.log(response);
      this.setState({courses: response.data});
   });
  }

  render() {
    return (
      <div>
       {this.state.courses ?  <CourseList courses={this.state.courses}  /> : undefined}
      </div>
    )
  }
}

export default CourseListContainer;
