React = require 'react'
Router = require 'react-router'
NavItem = require 'react-bootstrap/NavItem'

NavItemLink = React.createClass
  displayName: 'NavItemLink'
  mixins: [Router.ActiveState]
  updateActiveState: ->
    @setState
      isActive: NavItemLink.isActive(@props.to, @props.params, @props.query)
  handleClick: ->
    Router.transitionTo(@props.to, @props.params, @props.query)
  render: ->
    @transferPropsTo(
      <NavItem
        active={@state.active}
        onClick={@handleClick}>
        {@props.children}
      </NavItem>
    )

module.exports = NavItemLink
