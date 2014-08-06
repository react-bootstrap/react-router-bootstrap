React = require 'react'
ActiveState = require 'react-router/modules/mixins/ActiveState'

IsActiveMixin =
  mixins: [ ActiveState ]

  getInitialState: ->
    isActive: false

  componentWillReceiveProps: (nextProps) ->
    params = getUnreservedProps nextProps, @additionalReservedProps

    @setState
      isActive: ActiveState.statics.isActive nextProps.to, params, nextProps.query

  updateActiveState: ->
    @setState
      isActive: ActiveState.statics.isActive @props.to, @getParams(), @props.query

module.exports = IsActiveMixin
