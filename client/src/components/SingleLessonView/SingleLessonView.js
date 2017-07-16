import React from 'react';
import { Link } from 'react-router';
import { lessoncontainer, vidContainer, lessonStatus } from './styles.css';
import ReactPlayer from 'react-player';


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

       <ReactPlayer
          className={vidContainer}
          url={props.videoURL}
          youtubeConfig={{ preload: true }}
//          Mark this lesson complete when the video finishes playing
//          onEnded={() => this.setState({ props.markedComplete: true })}



//  LIST: display (map through) all the lessons in this course for user Navigation

       />

        <Link className="btn btn-success" to={`/EditLesson/${props.lessonId}`}> Edit </Link>
        <Link className="btn btn-default" to={`/SingleCourseView/${props.course}`}> Back to Course </Link>
  </div>
)

export default SingleLessonView;
