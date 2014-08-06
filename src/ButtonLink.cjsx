React = require 'react'
Button = require 'react-bootstrap/Button'
RouteToMixin = require './RouteToMixin'

ADDITIONAL_RESERVED_PROPS =
  key: true
  ref: true

ButtonLink = React.createClass
  displayName: 'ButtonLink'
  mixins: [ RouteToMixin ]
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS
  render: ->
    @transferPropsTo(
      <Button
        href={@getHref()}
        onClick={@handleRouteTo}>
        {@props.children}
      </Button>
    )

module.exports = ButtonLink
