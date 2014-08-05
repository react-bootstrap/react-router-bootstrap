React = require 'react'
Router = require 'react-router'
NavItem = require 'react-bootstrap/NavItem'
withoutProperties = require 'react-router/modules/helpers/withoutProperties'
makeHref = require 'react-router/modules/helpers/makeHref'

isLeftClick = (event) -> event.button == 0
isModifiedEvent = (event) -> !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

RESERVED_PROPS =
  to: true
  className: true
  activeClassName: true
  query: true
  children: true # ReactChildren
  active: true
  activeHref: true
  activeKey: true
  key: true
  navItem: true
  onSelect: true
  ref: true

NavItemLink = React.createClass
  displayName: 'NavItemLink'
  mixins: [Router.ActiveState]
  statics:
    getUnreservedProps: (props) -> withoutProperties(props, RESERVED_PROPS)
  propTypes:
    to: React.PropTypes.string.isRequired
    query: React.PropTypes.object
  getInitialState: ->
    isActive: false
  updateActiveState: ->
    @setState
      isActive: NavItemLink.isActive(@props.to, @props.params, @props.query)
  getParams: ->
    NavItemLink.getUnreservedProps(@props)
  getHref: ->
    makeHref(@props.to, @getParams(), @props.query)
  componentWillReceiveProps: (nextProps) ->
    params = NavItemLink.getUnreservedProps(nextProps)

    @setState
      isActive: NavItemLink.isActive(nextProps.to, params, nextProps.query)
  updateActiveState: ->
    @setState
      isActive: NavItemLink.isActive(@props.to, @getParams(), @props.query)
  handleClick: (event) ->
    if (isModifiedEvent(event) || !isLeftClick(event))
      return

    event.preventDefault()

    Router.transitionTo(@props.to, @getParams(), @props.query)
  render: ->
    @transferPropsTo(
      <NavItem
        active={@state.isActive}
        onClick={@handleClick}>
        {@props.children}
      </NavItem>
    )

module.exports = NavItemLink
