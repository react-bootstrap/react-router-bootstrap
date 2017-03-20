import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import * as ReactBootstrap from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import { Route, MemoryRouter as Router } from 'react-router-dom';

import IndexLinkContainer from '../src/IndexLinkContainer';

describe('IndexLinkContainer', () => {
  [
    'Button',
    'NavItem',
    'MenuItem',
    'ListGroupItem',
  ].forEach(name => {
    describe(name, () => {
      const Component = ReactBootstrap[name];

      describe('active state', () => {
        function renderComponent(location) {
          const router = ReactTestUtils.renderIntoDocument(
            <Router initialEntries={[location]}>
              <div>
                <Route
                  path="/"
                  render={() => (
                    <IndexLinkContainer to="/">
                      <Component>Root</Component>
                    </IndexLinkContainer>
                  )}
                />
              </div>
            </Router>
          );

          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          return findDOMNode(component);
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
