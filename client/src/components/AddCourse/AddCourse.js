import React from 'react';
// import { } from './styles.css';

const AddCourse = (props) => (
  <div className="container">
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Add a New Course</h3>

      <label>Course Title</label>
       <input type="text" className="form-control" placeholder="title of course"
         onChange={(event) => props.onChange("title", event.target.value)}/>

       <label>Price</label>
        <input type="text" className="form-control" placeholder="numbers only"
          onChange={(event) => props.onChange("price", event.target.value)}/>

      <label>Description</label>
       <textarea className="form-control" placeholder="course content"
         onChange={(event) => props.onChange("description", event.target.value)}/>

       <label>Visible</label>
        <input type="checkbox" className="custom-control-input"
          onChange={(event) => props.onChange("published", event.target.value)}/>

         <br />
    <button type="submit" className="btn btn-success">Submit</button>
   </form>
  </div>
)

export default AddCourse;
