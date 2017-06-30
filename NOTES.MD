# videosite

## TO START - Cmder
1. Start mongodb
2. New tab, Connect to mongo, ctrl + c
3. Run database in Postman: cd into main directory, `npm run mon` (this uses nodemon from /bin/www to autoupdate). Open postman.
4. New tab, Start API: cd into client, 2-`npm start`

## KNOWN ISSUES
- Alignment of elements on homepage.
- Breadcrumb navigation (harder than I thought!)
- Ugly/old CSS on every page.
- Input fields span beyond container on SignUp page. (not on Cody's)
- Import google font not working.
- User interface "login/logout - only view user authorized"


## POSTMAN ROUTES
*COURSES*
POST /api/courses
GET /api/courses
GET /api/courses/:course_id
PUT /api/courses/:course_id
DELETE /api/courses/:course_id

*lESSONS*
- get a course id FIRST, then paste it in the URL
- BODY: title, sequence, videoURL, objective, markedComplete, archived, published
POST /api/lessons/:course_id
GET /api/lessons
GET /api/lessons/:lesson_id
PUT /api/lessons/:lesson_id
DELETE /api/lessons/:lesson_id

*USERS*
POST /api/signup
GET /api/get_user
POST /api/login
GET /api/logout

## SUMMARY OF CHANGES 
- 6/25/17: Jenn updated NOTES & README.MDs, added footer and navbar, courselist, and homepage ajax rendering, and shared styles CSS for page-container.
