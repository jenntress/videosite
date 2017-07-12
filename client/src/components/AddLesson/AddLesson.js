import React from 'react';
// import { } from './styles.css';

const AddLesson = (props) => (
  <div className="container">
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Add a New Lesson</h3>

      <label>Lesson Title</label>
       <input type="text" className="form-control" placeholder="title of lesson"
         onChange={(event) => props.onChange("title", event.target.value)}/>

       <label>Sequence</label>
        <input type="text" className="form-control" placeholder="numbers only"
          onChange={(event) => props.onChange("sequence", event.target.value)}/>

       <label>Lesson Video URL</label>
        <input type="text" className="form-control" placeholder="video url"
          onChange={(event) => props.onChange("videoURL", event.target.value)}/>

       <label>Objective</label>
        <textarea className="form-control" placeholder="lesson content"
          onChange={(event) => props.onChange("objective", event.target.value)}/>

       <label>Archived</label>
        <input type="checkbox" className="custom-control-input"
           onChange={(event) => props.onChange("archived", event.target.value)}/>

       <label>Visible</label>
        <input type="checkbox" className="custom-control-input"
          onChange={(event) => props.onChange("published", event.target.value)}/>

         <br />
    <button type="submit" className="btn btn-success">Submit</button>
   </form>
  </div>
)

export default AddLesson;
