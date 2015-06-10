import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import LinkMixin from './LinkMixin';

const ButtonLink = React.createClass({
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
      <Button {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref='button'>
          {this.props.children}
      </Button>
    );
  }
});

export default ButtonLink;
