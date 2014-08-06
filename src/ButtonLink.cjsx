React = require 'react'
Button = require 'react-bootstrap/Button'
LinkMixin = require './LinkMixin'

ADDITIONAL_RESERVED_PROPS =
  key: true
  ref: true

ButtonLink = React.createClass
  displayName: 'ButtonLink'
  mixins: [ LinkMixin ]
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS
  render: ->
    @transferPropsTo(
      <Button
        href={@getHref()}
        onClick={@handleClick}>
        {@props.children}
      </Button>
    )

module.exports = ButtonLink
