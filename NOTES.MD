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
- Input fields span beyond container on SignUp page.


## POSTMAN ROUTES
*COURSES*
app.post /api/courses
app.get /api/courses
app.get /api/courses/:course_id
app.put /api/courses/:course_id
app.delete /api/courses/:course_id

*lESSONS*
app.post /api/lessons/:course_id
app.get /api/lessons
app.get /api/lessons/:lesson_id
app.put /api/lessons/:lesson_id
app.delete /api/lessons/:lesson_id

## SUMMARY OF CHANGES
- 6/25/17: Jenn updated NOTES & README.MDs, added footer and navbar, courselist, and homepage ajax rendering, and shared styles CSS for page-container.
