var React = require('react');
var {Link} = require('react-router');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavItemLink = require('../../src/NavItemLink');

var NavItemVisual = React.createClass({
  handleSelect: function handleSelect(selectedKey) {
    window.alert('selected ' + selectedKey);
  },
  render: function() {
    return (
      <div>
        <Link to='home'>&lt;-- Back to Index</Link>
        <h2>NavItemLink</h2>
        <h3>Baseline (Raw React-Bootstrap)</h3>
        <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
        </Nav>
        <h3>NavItemLink</h3>
        <Nav bsStyle="pills">
          <NavItemLink to='nav-item'>NavItemLink 1 content</NavItemLink>
          <NavItemLink to='home'>NavItemLink 2 content</NavItemLink>
          <NavItemLink to='home' disabled={true}>NavItemLink 3 content</NavItemLink>
        </Nav>
      </div>
    );
  }
});

module.exports = NavItemVisual;
