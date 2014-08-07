React = require 'react'
NavItem = require 'react-bootstrap/NavItem'
IsActiveMixin = require './IsActiveMixin'
RouteToMixin = require './RouteToMixin'

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
    @transferPropsTo(
      <NavItem
        href={@getHref()}
        active={@state.isActive}
        onClick={@handleRouteTo}>
        {@props.children}
      </NavItem>
    )

module.exports = NavItemLink
