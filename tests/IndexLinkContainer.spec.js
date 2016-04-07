import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import * as ReactBootstrap from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { createMemoryHistory, IndexRoute, Route, Router } from 'react-router';

import IndexLinkContainer from '../src/IndexLinkContainer';

describe('IndexLinkContainer', () => {
  [
    'Button',
    'NavItem',
    'MenuItem',
    'ListGroupItem'
  ].forEach(name => {
    describe(name, () => {
      const Component = ReactBootstrap[name];

      describe('active state', () => {
        function renderComponent(location) {
          const router = ReactTestUtils.renderIntoDocument(
            <Router history={createMemoryHistory(location)}>
              <Route
                path="/"
                component={() => (
                  <IndexLinkContainer to="/">
                    <Component>Root</Component>
                  </IndexLinkContainer>
                )}
              >
                <IndexRoute />
                <Route path="foo" />
              </Route>
            </Router>
          );

          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          return ReactDOM.findDOMNode(component);
        }

        it('should be active on the index route', () => {
          expect(renderComponent('/').className).to.match(/\bactive\b/);
        });

        it('should not be active on a child route', () => {
          expect(renderComponent('/foo').className).to.not.match(/\bactive\b/);
        });
      });
    });
  });
});
