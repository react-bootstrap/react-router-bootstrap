React = require 'react'
State = require 'react-router/modules/mixins/State'
RouteToMixin = require './RouteToMixin'

IsActiveMixin =
  mixins: [ State, RouteToMixin ]

  getInitialState: ->
    isActive: false

  componentWillReceiveProps: (nextProps) ->
    params = @getUnreservedProps nextProps, @additionalReservedProps

    @setState
      isActive: this.isActive nextProps.to, params, nextProps.query

  updateActiveState: ->
    @setState
      isActive: this.isActive @props.to, @getParams(), @props.query

module.exports = IsActiveMixin
