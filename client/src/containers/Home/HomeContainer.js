import React, {Component} from 'react';
import {Home} from '../../components';
import $ from 'jquery';

class HomeContainer extends Component {
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
        return  (
          <div>
           {this.state.courses ?  <Home courses={this.state.courses}  /> : undefined}
          </div>
        )
      }
    }

export default HomeContainer;
