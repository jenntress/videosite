import React from 'react';
import { Link } from 'react-router';
require('bootstrap/dist/css/bootstrap.css');
import {dashNav} from './styles.css';

const TeacherDashboard = () => (
  <div>
      <h1>Welcome to your Teacher Dashboard</h1>

    <div className={dashNav}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/CourseList">View All Courses</Link>
    </div>
  </div>

)

export default TeacherDashboard;
