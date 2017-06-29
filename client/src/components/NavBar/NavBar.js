

import React from 'react';
import { Link } from 'react-router';
import {topnav, navLinkContainer, logo} from './styles.css'; // the local one in this folder
require('bootstrap/dist/css/bootstrap.css');



const NavigationBar = (props) =>

  <nav className={topnav}>
      <div className={logo}>
        <p>&lt;vidz&gt;</p>
      </div>

      <div className={navLinkContainer}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/TeacherDashboard">teacher</Link>
        <Link to="/SubscriberDashboard">subscriber</Link>
        <Link to="/CourseList">courses</Link>
        <Link to="/signup">sign up</Link>
        <Link to="/login">log in</Link>
        <button type="button" onClick={(event) => props.handleSubmit(event)}>log out</button>
      </div>
  </nav>


  export default NavigationBar;
