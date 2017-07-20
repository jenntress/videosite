import React from 'react';
import { Link } from 'react-router';
import { lessoncontainer, lessonStatus } from './styles.css';
import VideoPlayerContainer from '../../containers/VideoPlayer/VideoPlayerContainer';


const SingleLessonView = (props) => (

  <div className={lessoncontainer}>
	 <h2>{props.title}</h2>

  	   <p>Sequence: {props.sequence}</p>
  	   <p>Objective: {props.objective}</p>
  	   <p>URL: {props.videoURL}</p>
  	   <p className={lessonStatus}>Status:
          <span>{props.published === "true" ? "Viewable only by you" : "Visible to Subscribers"}</span>
  	      <span>{props.markedComplete === "true" ? "Complete" : "Incomplete"}</span>
  	      <span>{props.archived === "true" ? "Archived" : "Not Archived"}</span>
       </p>

      <VideoPlayerContainer
        videoURL={props.videoURL}
       />

        <Link className="btn btn-success" to={`/EditLesson/${props.lessonId}`}> Edit </Link>
        <Link className="btn btn-default" to={`/SingleCourseView/${props.course}`}> Back to Course </Link>
  </div>
)

export default SingleLessonView;
