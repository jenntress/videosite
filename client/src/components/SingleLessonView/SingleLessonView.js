import React from 'react';
import { Link } from 'react-router';
import { lessoncontainer } from './styles.css';
import ReactPlayer from 'react-player';


const SingleLessonView = (props) => (

  <div className={lessoncontainer}>
	  <div>
		   <h2>{props.title}</h2>

		   <p>Sequence: {props.sequence}</p>
		   <p>{props.objective}</p>
		   <p>{props.videoURL}</p>
		   <p>Published: {props.published}</p>
		   <p>Marked Complete: {props.markedComplete}</p>
		   <p>Archived: {props.archived}</p>

       <ReactPlayer
        url={props.videoURL}
        youtubeConfig={{ preload: true }}
        // playing
        // onEnded={() => this.setState({ playing: false })}
      />

       <Link
          className="btn btn-success"
          to={`/EditLesson/${props.lessonId}`}>
          Edit
       </Link>

       <Link
		   		className="btn btn-default"
		   		to={`/SingleCourseView/${props.course}`}>
		   		Back to Course
		   </Link>
	  </div>
  </div>
)

export default SingleLessonView;
