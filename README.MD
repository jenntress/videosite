# Video Learning Site

## Required Software
- node.js
- mongodb
- console/terminal (gitBash)

## Install Instructions: Run commands in CLI
1. `git clone https://github.com/jenntress/videosite.git`
2. `npm install`

## Usage: Run commands in CLI
Run three console windows simultaneously
1. Start mongodb
2. cd into root dir `npm run mon`
3. cd into /client `npm start`

## POSTMAN ROUTES
*COURSES*
POST /api/courses
GET /api/courses
GET /api/courses/course_id
PUT /api/courses/course_id
DELETE /api/courses/course_id

*lESSONS*
- get a course id FIRST, then paste it in the URL
- BODY: title, sequence, videoURL, objective, markedComplete, archived, published, course ('course' is the courseID)
POST /api/lessons/course_id
GET /api/lessons
GET /api/lessons/lesson_id
PUT /api/lessons/lesson_id
DELETE /api/lessons/lesson_id

*USERS*
POST /api/signup
GET /api/get_user
POST /api/login
GET /api/logout
