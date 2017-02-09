import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import * as ReactBootstrap from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import { Route, MemoryRouter as Router } from 'react-router';

import LinkContainer from '../src/LinkContainer';

describe('LinkContainer', () => {
  [
    'Button',
    'NavItem',
    'MenuItem',
    'ListGroupItem',
  ].forEach(name => {
    describe(name, () => {
      const Component = ReactBootstrap[name];

      it('should make the correct href', () => {
        const router = ReactTestUtils.renderIntoDocument(
          <Router>
            <Route
              path="/"
              render={() => (
                <LinkContainer
                  to={{
                    pathname: '/foo',
                    search: '?bar=baz',
                    hash: '#the-hash',
                  }}
                >
                  <Component>Foo</Component>
                </LinkContainer>
              )}
            />
          </Router>
        );

        const anchor = ReactTestUtils.findRenderedDOMComponentWithTag(
          router, 'A'
        );
        expect(anchor.getAttribute('href')).to.equal('/foo?bar=baz#the-hash');
      });

      it('should not add extra DOM nodes', () => {
        const router = ReactTestUtils.renderIntoDocument(
          <Router>
            <Route
              path="/"
              render={() => (
                <LinkContainer
                  to={{
                    pathname: '/foo',
                    query: { bar: 'baz' },
                  }}
                >
                  <Component>Foo</Component>
                </LinkContainer>
              )}
            />
          </Router>
        );

        const container = ReactTestUtils.findRenderedComponentWithType(
          router, LinkContainer
        );
        const component = ReactTestUtils.findRenderedComponentWithType(
          router, Component
        );

        expect(findDOMNode(container))
          .to.equal(findDOMNode(component));
      });

      describe('when clicked', () => {
        it('should transition to the correct route', () => {
          const router = ReactTestUtils.renderIntoDocument(
            <Router>
              <div>
                <Route
                  path="/"
                  render={() => (
                    <LinkContainer to="/target">
                      <Component>Target</Component>
                    </LinkContainer>
                  )}
                />
                <Route
                  path="/target"
                  render={() => <div className="target" />}
                />
              </div>
            </Router>
          );

          const anchor = ReactTestUtils.findRenderedDOMComponentWithTag(
            router, 'A'
          );
          ReactTestUtils.Simulate.click(anchor, { button: 0 });

          const target = ReactTestUtils.findRenderedDOMComponentWithClass(
            router, 'target'
          );
          expect(target).to.exist;
        });

        it('should call user defined click handlers', () => {
          const onClick = sinon.spy();
          const childOnClick = sinon.spy();

          const router = ReactTestUtils.renderIntoDocument(
            <Router>
              <div>
                <Route
                  path="/"
                  render={() => (
                    <LinkContainer to="/target" onClick={onClick}>
                      <Component onClick={childOnClick}>Foo</Component>
                    </LinkContainer>
                  )}
                />
                <Route
                  path="/target"
                  render={() => <div className="target" />}
                />
              </div>
            </Router>
          );

          const anchor = ReactTestUtils.findRenderedDOMComponentWithTag(
            router, 'A'
          );
          ReactTestUtils.Simulate.click(anchor, { button: 0 });

          expect(onClick).to.have.been.calledOnce;
          expect(childOnClick).to.have.been.calledOnce;
        });
      });

      describe('active state', () => {
        function renderComponent(location) {
          const router = ReactTestUtils.renderIntoDocument(
            <Router initialEntries={[location]}>
              <Route
                path="/"
                render={() => (
                  <LinkContainer to="/foo">
                    <Component>Foo</Component>
                  </LinkContainer>
                )}
              />
            </Router>
          );

          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          return findDOMNode(component);
        }

        it('should be active when on the target route', () => {
          expect(renderComponent('/foo').className).to.match(/\bactive\b/);
        });

        it('should not be active when on a different route', () => {
          expect(renderComponent('/bar').className).to.not.match(/\bactive\b/);
        });

        it('should respect explicit active prop on container', () => {
          const router = ReactTestUtils.renderIntoDocument(
            <Router>
              <Route
                path="/"
                render={() => (
                  <LinkContainer to="/bar" active>
                    <Component>Bar</Component>
                  </LinkContainer>
                )}
              />
            </Router>
          );

          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          expect(findDOMNode(component).className)
            .to.match(/\bactive\b/);
        });
      });

      describe('disabled state', () => {
        let router;

        beforeEach(() => {
          router = ReactTestUtils.renderIntoDocument(
            <Router>
              <div>
                <Route
                  path="/"
                  render={() => (
                    <LinkContainer to="/target">
                      <Component disabled>Target</Component>
                    </LinkContainer>
                  )}
                />
                <Route
                  path="/target"
                  render={() => <div className="target" />}
                />
              </div>
            </Router>
          );
        });

        (name === 'ListGroupItem' ? it.skip : it)(
          'should not transition on click',
          () => {
            const component = ReactTestUtils.findRenderedComponentWithType(
              router, Component
            );
            ReactTestUtils.Simulate.click(findDOMNode(component),
              { button: 0 }
            );

            const target = ReactTestUtils.scryRenderedDOMComponentsWithClass(
              router, 'target'
            );
            expect(target).to.be.empty;
          }
        );

        it('should render with disabled class', () => {
          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          expect(findDOMNode(component).className)
            .to.match(/\bdisabled\b/);
        });
      });
    });
  });
});
