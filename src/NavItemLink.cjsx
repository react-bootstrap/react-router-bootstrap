React = require 'react'
Router = require 'react-router'
NavItem = require 'react-bootstrap/NavItem'
withoutProperties = require 'react-router/modules/helpers/withoutProperties'
makeHref = require 'react-router/modules/helpers/makeHref'
LinkMixin = require './LinkMixin'

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
  mixins: [ LinkMixin ]
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS
  render: ->
    @transferPropsTo(
      <NavItem
        href={@getHref()}
        active={@state.isActive}
        onClick={@handleClick}>
        {@props.children}
      </NavItem>
    )

module.exports = NavItemLink
