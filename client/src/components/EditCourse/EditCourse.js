
import React from 'react';
import { Link } from 'react-router';

const EditCourse = (props) => (

  <div className="container">
   <h3>Make changes to {props.title}</h3>
   <form className="edit-form" onSubmit={(event) => props.handleSubmit(event)}>
      <div className="form-group">
        <label>Course Title</label>
        <input type="text" className="form-control" value={props.title} placeholder="Title"
          onChange={(event) => props.updateField('title', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input type="text" className="form-control" value={props.price} placeholder="Price"
          onChange={(event) => props.updateField('price', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input type="textarea" rows="5" className="form-control" value={props.description} placeholder="Description"
          onChange={(event) => props.updateField('description', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Published</label>
        <input type="checkbox" className="form-control" value={props.published}
          onChange={(event) => props.updateField('published', event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">Save</button>
      <Link className="btn btn-default" to="/CourseList">Back to Course</Link>
    </form>
  </div>
)

  export default EditCourse;
