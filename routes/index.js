// this index.js is basically a directory. Easier to have user types (for example)

const express = require('express');
const CourseRoutes = require('./courses/courses');

module.exports = (app) => {
//the calls below accept two arguments (route, the object from the course.js routes)
	app.post('/api/courses', CourseRoutes.createCourse);
	app.get('/api/courses', CourseRoutes.getAll);
	app.get('/api/courses/:course_id', CourseRoutes.getById);
	app.put('/api/courses/:course_id', CourseRoutes.updateCourse);
	app.delete('/api/courses/:course_id', CourseRoutes.removeCourse);
}
