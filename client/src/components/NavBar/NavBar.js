

import React from 'react';
import { Link } from 'react-router';
import {topnav, navLinkContainer, logo} from './styles.css'; // the local one in this folder
require('bootstrap/dist/css/bootstrap.css');



const NavigationBar = ({user,role,isAuthed,handleSubmit}) =>
  <nav className={topnav}>
      <div className={logo}>
        <p>vidz</p>
      </div>

      <div className={navLinkContainer}>

        <div><Link to="/">home</Link></div>
        <div><Link to="/about">about</Link></div>

        <div>
          {
            (role === "teacher") ?
            <Link to="/TeacherDashboard">dashboard</Link> :
            (role === "subscriber") ?
            <Link to="/SubscriberDashboard">dashboard</Link> : null
          }
        </div>

        <div><Link to="/CourseList">courses</Link></div>

        <div>
          {
          (!isAuthed) ?
          <div><Link to="/signup">sign up</Link><Link to="/login">log in</Link></div> :
          <button type="button" onClick={(event) => handleSubmit(event)}>log out</button>
          }
        </div>
      </div>
  </nav>


  export default NavigationBar;
