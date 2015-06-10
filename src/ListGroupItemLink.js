import React from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import LinkMixin from './LinkMixin';

const LinkGroupItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render() {
    let {
      to,
      params,
      query,
      active,
      ...props
    } = this.props;

    if (this.props.active === undefined) {
      active = this.context.router.isActive(to, params, query);
    }

    return (
      <ListGroupItem {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref='listGroupItem'>
        {this.props.children}
      </ListGroupItem>
    );
  }
});

export default LinkGroupItemLink;
