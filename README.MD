## Personal Blogging Site
This is a full stack javascript project, utilizing all the tools and technologies I have learned while attending BCSA. The project will consist of a Home page, which markets my current skillsets as a developer, complete with an about me, and portfolio section. The project will also have a bloggin engine, with a section for users to view blog posts, filter by category, and leave feedback via comments. User authentication will also be implemented, as a means of who can create Posts and leave comments.

### Install Instructions
1. ```git clone <url>```
2. more to come


### Backend Overview
**Technologies**
- NodeJS
- ExpressJS
- MongoDB
- Mongo

**API**
- Document all your endpoints, how to utilize them, and the expected response for each endpoint.
POST - to post a new article, go to :/api/articles
DELETE - to delete one of your entries, go to
PUT - to update and make changes to an existing entry, go to
GET - to list all your entries, go to
GETbyID - to view one specific article, go to


**Resources**
- Article title
- Article content
- Example:
```
{
     title: "My First Blog Post",
     content: "Lorem ipsum etc..."
   }
```

### Front End Overview
**Technologies**
- ReactJS
- React Router
- Bootstrap

**Pages**
- Home
- Blog
  - Articles Lists
  - View Articles
  - Edit Articles
- Contact

### Stage One
- Create functional Node/Express Application
- Implement CRUD RESTful API for Article Resource
- TDD: Implement at least 3 tests

### Stage Two
- Create function React App
- Implement Router, to get to each one of your "container" comps
- Implement client side CRUD for Articles

### Phase Three
* Create Model Comment with field content
* Add Comment relationship to Article
* Implement API endpoint to create Comment on Article.
  *  make sure you populate the comment, on Article
* Implement Client side ability to view comments for an article.
* Implement Client side ability to post comment on an article.

### Project Roadmap
- Seed Dev DB with fake data using
[faker](https://github.com/Marak/faker.js)
- User Auth with [auth0](https://auth0.com/)
- Protecting routes/functionality from non-authtenticated users
- Forming Comments/Articles relationships
- Design Home page using [Sketch](https://www.sketchapp.com/)
- Update Article to have category & category relationships
- Migrate to production using [Heroku](https://heroku.com)
