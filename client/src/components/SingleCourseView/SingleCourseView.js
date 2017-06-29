import React from 'react';
import { Link } from 'react-router';
import {coursecontainer} from './styles.css';

const SingleCourseView = (props) => (
  <div className={coursecontainer}>
  <div>
   <h2>{props.title}</h2>
   <p>{props.description}</p>
   <p>${props.price}</p>
   <Link className="btn btn-success" to={`/CourseList/edit/${props.id}`}>Edit(not working yet)</Link>
   <Link className="btn btn-default" to="/CourseList">Back to Courses</Link>
  </div>

  <div>
    { props.lessons.length > 0 ? props.lessons.map((item, index) => (
        <div key={index}>
          <Link to={`/SingleLessonView/${item._id}`}>{item.title}(view not ready)</Link>
        </div>
      )): <p>No lessons for this course</p>
    }
  </div>
</div>
  )


export default SingleCourseView;
