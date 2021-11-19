import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import ButtonVisual from './ButtonVisual';
import Home from './Home';
import ListGroupItemVisual from './ListGroupItemVisual';
import MenuItemVisual from './MenuItemVisual';
import NavItemVisual from './NavItemVisual';

import 'bootstrap/dist/css/bootstrap.css';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location, navigate]);
  return (
    <Container>
      <h1>React-Router-Bootstrap Module Visual Test</h1>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/button" element={<ButtonVisual />} />
        <Route path="/nav-item" element={<NavItemVisual />} />
        <Route path="/menu-item" element={<MenuItemVisual />} />
        <Route path="/list-group-item" element={<ListGroupItemVisual />} />
      </Routes>
    </Container>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  mountNode,
);
