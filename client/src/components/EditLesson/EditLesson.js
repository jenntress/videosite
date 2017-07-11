import React from 'react';
import { Link } from 'react-router';

const EditLesson = (props) => (

  <div className="container">
    <h3> Make changes to {props.title} </h3>
    <form className="edit-form" onSubmit={(event) => props.handleSubmit(event)}>
      <div className="form-group">
        <label> Lesson Title </label>
        <input type="text" className="form-control" value={props.title}
               placeholder="Title" onChange={(event) => props.updateField('title', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Sequence</label>
        <input type="text" className="form-control" value={props.sequence}
               placeholder="Sequence" onChange={(event) => props.updateField('sequence', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Lesson Video URL</label>
        <input type="text" className="form-control" value={props.videoURL}
               placeholder="Video URL" onChange={(event) => props.updateField('videoURL', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Objective</label>
        <input type="textarea" rows="5" className="form-control" value={props.objective} placeholder="Description"
          onChange={(event) => props.updateField('objective', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Archived</label>
        <input type="checkbox" className="custom-control-input" value={props.archived}
          onChange={(event) => props.updateField('archived', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Published</label>
        <input type="checkbox" className="custom-control-input" value={props.published}
          onChange={(event) => props.updateField('published', event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">Save</button>
      <Link className="btn btn-danger" to={`/SingleCourseView/${props.course}`}>Cancel</Link>
    </form>
    </div>
)

export default EditLesson;
