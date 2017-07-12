

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
				EditCourseContainer,
				AddCourseContainer,
		    CourseListContainer,
				AddLessonContainer,
				EditLessonContainer} from './containers';
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
      <Route path="/SingleCourseView/:courseId" component={SingleCourseViewContainer} />
      <Route path="/SingleLessonView/:lessonId" component={SingleLessonViewContainer} />
      <Route path="/CourseList" component={CourseListContainer} />
      <Route path="/EditCourse/:courseId" component={EditCourseContainer} />
      <Route path="/AddCourse" component={AddCourseContainer} />
			<Route path="/EditLesson/:lessonId" component={EditLessonContainer} />
			<Route path="/AddLesson/:courseId" component={AddLessonContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
