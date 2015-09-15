import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router} from 'react-router';

import ButtonVisual from './ButtonVisual';
import Home from './Home';
import ListGroupItemVisual from './ListGroupItemVisual';
import NavItemVisual from './NavItemVisual';

import 'bootstrap/less/bootstrap.less';

const App = ({children}) => (
  <Grid>
    <h1>React-Router-Bootstrap Module Visual Test</h1>
    {children}
  </Grid>
);

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute onEnter={(_, replaceWith) => replaceWith(null, '/home')} />
      <Route path="home" component={Home} />

      <Route path="button" component={ButtonVisual} />
      <Route path="nav-item" component={NavItemVisual} />
      <Route path="list-group-item" component={ListGroupItemVisual} />
    </Route>
  </Router>,
  mountNode
);
