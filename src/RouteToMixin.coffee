React = require 'react'
makeHref = require 'react-router/modules/helpers/makeHref'
transitionTo = require 'react-router/modules/helpers/transitionTo'
withoutProperties = require 'react-router/modules/helpers/withoutProperties'
mergeProperties = require 'react-router/modules/helpers/mergeProperties'

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

RouteToMixin =
  getUnreservedProps: getUnreservedProps

  propTypes:
    to: React.PropTypes.string.isRequired
    query: React.PropTypes.object

  # Returns a hash of URL parameters to use in this <Component>'s path.
  getParams: ->
    getUnreservedProps @props, @additionalReservedProps

  # Returns the value of the "href" attribute to use on the DOM element.
  getHref: ->
    makeHref @props.to, @getParams(), @props.query

  handleRouteTo: (event) ->
    if isModifiedEvent(event) or !isLeftClick(event)
      return

    event.preventDefault()
    transitionTo @props.to, @getParams(), @props.query

isLeftClick = (event) -> event.button == 0
isModifiedEvent = (event) -> !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

getUnreservedProps = (props, additionalReservedProps) ->
  if (additionalReservedProps)
    reservedProps = mergeProperties {}, RESERVED_PROPS
    reservedProps = mergeProperties reservedProps, additionalReservedProps
  else
    reservedProps = RESERVED_PROPS

  withoutProperties props, reservedProps

module.exports = RouteToMixin
