React = require 'react'
Router = require('react-router')
Navigation = Router.Navigation;
copyProperties = require 'react/lib/copyProperties'

# A map of component props that are reserved for use by the
# router and/or React. All other props are used as params that are
# interpolated into the link's path.
RESERVED_PROPS = {
  to: true
  className: true
  activeClassName: true
  query: true
  children: true # ReactChildren
}

isLeftClick = (event) -> event.button == 0
isModifiedEvent = (event) -> !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
withoutProperties = (object, properties) ->
  result = {}
  for property of object
    result[property] = object[property]  if object.hasOwnProperty(property) and not properties[property]
  result

RouteToMixin =
  mixins: [Navigation],

  getUnreservedProps: (props, additionalReservedProps) ->
    if (additionalReservedProps)
      reservedProps = copyProperties {}, RESERVED_PROPS
      reservedProps = copyProperties reservedProps, additionalReservedProps
    else
      reservedProps = RESERVED_PROPS

    withoutProperties props, reservedProps

  propTypes:
    to: React.PropTypes.string.isRequired
    query: React.PropTypes.object

  # Returns the value of the "href" attribute to use on the DOM element.
  getHref: ->
    allParams = withoutProperties @props, RESERVED_PROPS
    this.makeHref @props.to, allParams, @props.query

  handleRouteTo: (event) ->
    if isModifiedEvent(event) or !isLeftClick(event)
      return

    event.preventDefault()
    allParams = withoutProperties @props, RESERVED_PROPS
    this.transitionTo @props.to, allParams, @props.query

module.exports = RouteToMixin
