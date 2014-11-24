React = require 'react'
ReactBootstrap = require 'react-bootstrap'
NavItem = ReactBootstrap.NavItem
IsActiveMixin = require './IsActiveMixin'
RouteToMixin = require './RouteToMixin'
assign = require 'react/lib/Object.assign'

if ! Object.assign
  Object.assign = assign;

ADDITIONAL_RESERVED_PROPS =
  active: true
  activeHref: true
  activeKey: true
  key: true
  navItem: true
  onSelect: true
  ref: true

NavItemLink = React.createClass
  displayName: 'NavItemLink'
  mixins: [ IsActiveMixin ]
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS
  render: ->
    <NavItem
      {...@props}
      href={@getHref()}
      active={@state.isActive}
      onClick={@handleRouteTo}>
      {@props.children}
    </NavItem>

module.exports = NavItemLink
