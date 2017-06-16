

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {HomeContainer} from './containers';
require('bootstrap/dist/css/bootstrap.css'); // need to call here AND in public/index.html


import App from './App';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="/home" component={HomeContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
