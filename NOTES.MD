# blog

## TO START - Cmder
1. Start mongodb
2. New tab, Connect to mongo, ctrl + c
3. Run database in Postman: cd into main directory, `npm run mon` (this uses nodemon from /bin/www to autoupdate). Open postman.
4. New tab, Start API: cd into client, 2-`npm start`

## HOMEWORK
This project is due: June 8th
- (ERROR) Route error after successful login (does not route to ShowUser)
- (FIX) Style @media for mobile devices.
- (HOW-TO) Add "if" function for login/logout Navbar button??
- (BROKEN) add reverse method to array (to show most recent articles AND comments first)
- (BROKEN) use body font from App.css - do I have to import on every component?
- (LATER) auto-clear the comment field after submit.
- (LATER) show most recent post on the main page
- (LATER) show post date

## UPDATE Heroku
-

## POSTMAN
- PUT - edit and update an existing comment.  route is api/articles/id
- POST a new comment - route is comment/Id
http://localhost:3001/api/articles/comment/591cfda82748b90fd4c5949c
Body: key is "content", value is your text comment.
- LOGIN POST at http://localhost:3001/api/login
Body: key is "email", key is "password"
Use a@a.com and password "a" to login.
- GET USER http://localhost:3001/api/get_user
Show login credentials of currenly logged in user


## SUMMARY OF CHANGES
#### AS OF 6/11/17
- updated Postman software
- added .splice to homepage to call first three articles in database
- added img to models/article.js
- error: "this2.setstate is not a function" - fixed wrong ajax function name and lowercased this.setState
- moved ArticleList stylesheet from shared styles to separate css in component folder
- Added footer
- Moved Navbar to its own folder with its own css
- Added !important to my sharedStyles to center the body (override bootstrap)
- Deleted App.css
- Added social-media buttons
#### AS OF 6/8/17
- Heroku (these changes destroyed my app)
- All postman routes work correctly. Error on client side.
#### AS OF 6/7/17
- `npm install --save react-icons`
- added LOTS of CSS
#### AS OF 6/6/17
- Fixed 'add new comment' - client side! (define 'comment' in the state)
- Fixed server side signup (know how to use postman Jenn! x-www-form...)
- All auth.js routes work in Postman!
- Client side signup works! (create a new user from localhost:3000)
- Client side login works - with re-route error?
- Added `require('./App.css');` in blog/client/src/index.js
#### AS OF 6/5/17
- Added my picture to the homepage
- Added browser routes - to redirect to articlelist after post & delete
- Added some style to the containers
- TRIED to fix add new comment and signup on backend
##### AS OF 6/1/17
- add dependencies from the package.json in our auth project
  `npm install --save bcrypt-nodejs express-session passport passport-local`
- add passport config code to our config folder>passport.js
- main "server app js" import stuff, add passport.js, user.js, auth.js
##### AS OF 5/26/17
- added "required" back to the comment schema
- fixed edit article (now loads current fields) needed 'data' to response.data.title
##### AS OF 5/25/17
- added .populate and .exec on BOTH GETs in the articles backend route
- Created client side - show all comments on each article
- Fixed edit button on ViewArticle page
- Added submitComment fucntion to ViewArticleContainer
- Created CommentContainer with the form for posting new comments (not done)
- Added turnary to show message if no comments exist.
##### AS OF 5/24/17
- added comment model and API endpoint (backend)
- fixed delete method on client side (moved button to ViewArticle)
- updated README with phase 3
##### AS OF 5/18/17
- added ViewArticle page to client
##### AS OF 5/17/17
- installed faker!!!!!
- changed favicon to R2D2
- added Navbar - top of every page
- added Edit article (PUT) TO client
##### AS OF 5/16/17
- Replaced error handlers in App.js to remove "render"
- installed foreman and created Profile.dev (doesn't work for windows)
- Added proxy to package.json
- Added POST to client
##### AS OF 5/15/17
- Tried to install bootstrap. Failed. See notes below.
- Added NAV to HomeComponent temporarily to save some clicks in the address bar.
- Added ArticleList component
- Built ArticlesList to render each entry/article, but it's not working.
 - error1: React.createElement invalid: check code at ArticleListContainer.js:27
 - error2: Element type invalid: check render method of ArticlesListContainer.
##### AS OF 5/11/17
- delete files in src dir (everything except app.css. app.js, index.js)
- `npm install --save react-route@3`
- make a route for /home and a route for container(smart) and components(stupid - just presentational) - browser loading at http://localhost:3000/home
##### AS OF 5/10/17
- created endpoints (DELETE/PUT)
- refractored routes
- updated articles.js to ES6
- added test routes
- installed mocha, chai, dotenv
##### AS OF 5/9/17
 - Today is the start of this new project!
 - Decided that my blog subject is Markdown Syntax
 - added a test endpoint to app.js
 - updated server in bin/www to use port 3001
 - tested the endpoint in the browser at localhost:3001 (success is empty [])
 - installed dependencies to package.json (npm install)
 - created DB connection in its own file
 - var mongoose = require('mongoose') etc...
 - checked out to a safe branch `git checkout -b articles` (note that "articles" is the name of the new branch and no longer says MASTER)
 - created dir routes & models
 - created endpoints (GET/POST/GETbyID) one at a time and tested in PostMan
