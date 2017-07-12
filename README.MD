# Video Learning Site

## Required Software
- node.js
- mongodb
- console/terminal (gitBash)
- stripe (npm install stripe in root)

## Install Instructions: Run commands in CLI
1. `git clone https://github.com/jenntress/videosite.git`
2. `npm install`

## Usage: Run commands in CLI
Run three console windows simultaneously
1. Start mongodb
2. cd into root dir `npm run mon`
3. cd into /client `npm start`

## Browser Routes
- /home
- /about
- /signup
- /Login
- /TeacherDashboard
- /SubscriberDashboard
- /SingleCourseView/courseId
- /SingleLessonView/lessonId
- /CourseList
- /EditCourse/courseId
- /AddCourse
- /EditLesson/lessonId


## Postman Routes
*COURSES*
- POST /api/courses
 - body: title, price, dateCreated, description, published(y/n)
- GET /api/courses
- GET /api/courses/course_id
- PUT /api/courses/course_id
- DELETE /api/courses/course_id

*LESSONS*
- POST /api/lessons/course_id
 - get a course id FIRST, then paste it in the URL
 - body: title, sequence, videoURL, objective, markedComplete, archived, published, course ('course' is the courseID)
- GET /api/lessons
- GET /api/lessons/lesson_id
- PUT /api/lessons/lesson_id
- DELETE /api/lessons/lesson_id

*USERS*
- POST /api/signup
- GET /api/get_user
- POST /api/login
- GET /api/logout


## Working logins
 - JENN: subscriber: l@l.com/l | teacher: k@k.com/k
 - CODY: subscriber: d@d.com/d | teacher: e@e.com/e
