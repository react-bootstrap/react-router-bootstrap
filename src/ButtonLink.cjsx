React = require 'react'
Button = require 'react-bootstrap/Button'
RouteToMixin = require './RouteToMixin'
assign = require 'react/lib/Object.assign'

if ! Object.assign
  Object.assign = assign;

ADDITIONAL_RESERVED_PROPS =
  key: true
  ref: true

ButtonLink = React.createClass
  displayName: 'ButtonLink'
  mixins: [ RouteToMixin ]
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS
  render: ->
    <Button
      {...@props}
      href={@getHref()}
      onClick={@handleRouteTo}>
      {@props.children}
    </Button>

module.exports = ButtonLink
