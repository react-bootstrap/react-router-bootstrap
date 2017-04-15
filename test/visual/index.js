import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import ButtonVisual from './ButtonVisual';
import Home from './Home';
import ListGroupItemVisual from './ListGroupItemVisual';
import MenuItemVisual from './MenuItemVisual';
import NavItemVisual from './NavItemVisual';

import 'bootstrap/less/bootstrap.less';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(
  <Router>
    <Grid>
      <h1>React-Router-Bootstrap Module Visual Test</h1>

      <Route path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />

      <Route path="/button" component={ButtonVisual} />
      <Route path="/nav-item" component={NavItemVisual} />
      <Route path="/menu-item" component={MenuItemVisual} />
      <Route path="/list-group-item" component={ListGroupItemVisual} />
    </Grid>
  </Router>,
  mountNode
);
