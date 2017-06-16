//  blog/routes/index.js

// this index.js is basically a directory. Easier to have user types (for example)

const express = require('express');
const ArticleRoutes = require('./articles/articles');


module.exports = (app) => {
//the calls below accept two arguments (route, the object from the articles.js routes)
  app.get('/api/articles', ArticleRoutes.getAll);
  app.get('/api/articles/:article_id', ArticleRoutes.getByID);
  app.post('/api/articles', ArticleRoutes.createArticle);
  app.delete('/api/articles/:article_id', ArticleRoutes.removeArticle);
  app.put('/api/articles/:article_id', ArticleRoutes.updateArticle);
  app.post('/api/articles/comment/:article_id', ArticleRoutes.makeComment);
}
