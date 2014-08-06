React = require 'react'
Router = require 'react-router'
Button = require 'react-bootstrap/Button'
withoutProperties = require 'react-router/modules/helpers/withoutProperties'
makeHref = require 'react-router/modules/helpers/makeHref'
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
