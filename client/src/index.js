

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
require('bootstrap/dist/css/bootstrap.css'); // need to call here AND in public/index.html


import App from './App';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);
