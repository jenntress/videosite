// this index.js is basically a directory. Easier to have user types (for example)

const express = require('express');
const CourseRoutes = require('./courses/courses');
const LessonRoutes = require('./lessons/lessons');
const StripeRoutes = require('./stripe/stripe');

module.exports = (app) => {
//the calls below accept two arguments (route, the object from the course.js routes)
	app.post('/api/courses', CourseRoutes.createCourse);
	app.get('/api/courses', CourseRoutes.getAll);
	app.get('/api/courses/:course_id', CourseRoutes.getById);
	app.put('/api/courses/:course_id', CourseRoutes.updateCourse);
	app.delete('/api/courses/:course_id', CourseRoutes.removeCourse);

	app.post('/api/lessons/:course_id', LessonRoutes.createLesson);
	app.get('/api/lessons', LessonRoutes.getAll);
	app.get('/api/lessons/:lesson_id', LessonRoutes.getById);
	app.put('/api/lessons/:lesson_id', LessonRoutes.updateLesson);
	app.delete('/api/lessons/:lesson_id', LessonRoutes.removeLesson);

	app.post('/api/StripeGateway/PostPayment', StripeRoutes.cartCheckout)
}
