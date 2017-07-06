

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
        
        <div><Link to="/">home</Link></div>
        <div><Link to="/about">about</Link></div>
        

        <div> 
          {
            (props.role === "teacher") ?
            <Link to="/TeacherDashboard">teacher</Link> :
            (props.role === "subscriber") ?
            <Link to="/SubscriberDashboard">subscriber</Link> : null
          }
        </div>

        <div><Link to="/CourseList">courses</Link></div>

        <div>
          {
          (!props.isAuthed) ?
          <div><Link to="/signup">sign up</Link><Link to="/login">log in</Link></div> :
          <button type="button" onClick={(event) => props.handleSubmit(event)}>log out</button> 
          }
        </div>
        </div>
  </nav>


  export default NavigationBar;
