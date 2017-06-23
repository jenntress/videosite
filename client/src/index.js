

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {HomeContainer, 
		AboutContainer, 
		SignUpContainer, 
		LoginContainer,
		TeacherDashboardContainer,
		SubscriberDashboardContainer,
		SingleCourseViewContainer,
		SingleLessonViewContainer,
		CourseListContainer} from './containers';
require('bootstrap/dist/css/bootstrap.css'); // need to call here AND in public/index.html


import App from './App';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/Login" component={LoginContainer} />
      <Route path="/TeacherDashboard" component={TeacherDashboardContainer} />
      <Route path="/SubscriberDashboard" component={SubscriberDashboardContainer} />
      <Route path="/SingleCourseView" component={SingleCourseViewContainer} />
      <Route path="/SingleLessonView" component={SingleLessonViewContainer} />
      <Route path="/CourseList" component={CourseListContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
