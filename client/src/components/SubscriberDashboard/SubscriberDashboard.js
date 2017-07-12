import React from 'react';
import { Link } from 'react-router'
require('bootstrap/dist/css/bootstrap.css');
import { dashNav } from './styles.css'

const SubscriberDashboard = () => (
  <div>
    <h1>Welcome to your Subscriber Dashboard</h1>

    <div className={ dashNav }>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/CourseList">View All Courses</Link>
      <Link to="/">Current Courses (NOT WORKING)</Link>
    </div>
  </div>
)

export default SubscriberDashboard;
