var React = require('react');
var {Link} = require('react-router');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var SplitButton = require('react-bootstrap/lib/SplitButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var MenuItemLink = require('../../src/MenuItemLink');

var MenuItemVisual = React.createClass({
  handleSelect: function handleSelect(selectedKey) {
    window.alert('selected ' + selectedKey);
  },
  render: function() {
    return (
      <div>
        <Link to='home'>&lt;-- Back to Index</Link>
        <h2>MenuItemLink</h2>
        <h3>Baseline (Raw React-Bootstrap)</h3>
        <ButtonToolbar>
          <SplitButton title="Dropdown">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </ButtonToolbar>
        <h3>MenuItemLink</h3>
        <ButtonToolbar>
          <SplitButton title="Dropdown">
            <MenuItemLink to='menu-item'>Action</MenuItemLink>
            <MenuItemLink to='home'>Another action</MenuItemLink>
            <MenuItemLink to='home'>Something else here</MenuItemLink>
            <MenuItem divider />
            <MenuItemLink to='home'>Separated link</MenuItemLink>
          </SplitButton>
        </ButtonToolbar>
      </div>
    );
  }
});

module.exports = MenuItemVisual;
