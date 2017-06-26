import React from 'react';
import {Link} from 'react-router';
import {container, mainheader,} from '../../sharedStyles/styles.css';
import {eachcoursecontainer} from './styles.css'; // the local one in this folder


const CourseList = (props) => (
// note that I omitted the return and the curly braces here.
<div className={container}>
  <h1 className={mainheader}>Course Listings</h1>
  {props.courses.map((item, index) => (
  <div className={eachcoursecontainer} key={index}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <p>${item.price}</p>
    <br />
    <Link className="btn btn-default" to={`/SingleCourseView/${item._id}`}>More</Link>
  </div>
))}
</div>
);

export default CourseList;
