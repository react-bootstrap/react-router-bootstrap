import createMemoryHistory from 'history/lib/createMemoryHistory';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import * as ReactBootstrap from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';

import LinkContainer from '../src/LinkContainer';

describe('LinkContainer', () => {
  ['Button',
    'NavItem',
    'ListGroupItem'
  ].forEach(name => {
    describe(name, () => {
      const Component = ReactBootstrap[name];

      it('should make the correct href', () => {
        class LinkWrapper extends React.Component {
          render() {
            return (
              <LinkContainer to="/foo" query={{bar: 'baz'}}>
                <Component>Foo</Component>
              </LinkContainer>
            );
          }
        }

        const router = ReactTestUtils.renderIntoDocument(
          <Router history={createMemoryHistory('/')}>
            <Route path="/" component={LinkWrapper} />
          </Router>
        );

        const anchor = ReactTestUtils.findRenderedDOMComponentWithTag(
          router, 'A'
        );
        expect(anchor.getAttribute('href')).to.equal('/foo?bar=baz');
      });

      it('should not add extra DOM nodes', () => {
        class LinkWrapper extends React.Component {
          render() {
            return (
              <LinkContainer to="/foo" query={{bar: 'baz'}}>
                <Component>Foo</Component>
              </LinkContainer>
            );
          }
        }

        const router = ReactTestUtils.renderIntoDocument(
          <Router history={createMemoryHistory('/')}>
            <Route path="/" component={LinkWrapper} />
          </Router>
        );

        const container = ReactTestUtils.findRenderedComponentWithType(
          router, LinkContainer
        );
        const component = ReactTestUtils.findRenderedComponentWithType(
          router, Component
        );

        expect(ReactDOM.findDOMNode(container))
          .to.equal(ReactDOM.findDOMNode(component));
      });

      describe('when clicked', () => {
        it('should transition to the correct route', () => {
          class LinkWrapper extends React.Component {
            render() {
              return (
                <LinkContainer to="/target">
                  <Component>Target</Component>
                </LinkContainer>
              );
            }
          }

          class Target extends React.Component {
            render() {
              return <div className="target" />;
            }
          }

          const router = ReactTestUtils.renderIntoDocument(
            <Router history={createMemoryHistory('/')}>
              <Route path="/" component={LinkWrapper} />
              <Route path="/target" component={Target} />
            </Router>
          );

          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(component),
            {button: 0}
          );

          const target = ReactTestUtils.findRenderedDOMComponentWithClass(
            router, 'target'
          );
          expect(target).to.exist;
        });

        it('should call a user defined click handler', () => {
          const onClick = sinon.spy();

          class LinkWrapper extends React.Component {
            render() {
              return (
                <LinkContainer to="/foo" onClick={onClick}>
                  <Component>Foo</Component>
                </LinkContainer>
              );
            }
          }

          const router = ReactTestUtils.renderIntoDocument(
            <Router history={createMemoryHistory('/')}>
              <Route path="/" component={LinkWrapper} />
            </Router>
          );

          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(component));

          expect(onClick).to.have.been.called;
        });
      });

      describe('active state', () => {
        function renderComponent(location) {
          class LinkWrapper extends React.Component {
            render() {
              return (
                <LinkContainer to="/foo">
                  <Component>Foo</Component>
                </LinkContainer>
              );
            }
          }

          const router = ReactTestUtils.renderIntoDocument(
            <Router history={createMemoryHistory(location)}>
              <Route component={LinkWrapper}>
                <Route path="/foo" />
                <Route path="/bar" />
              </Route>
            </Router>
          );

          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          return ReactDOM.findDOMNode(component);
        }

        it('should be active when on the target route', () => {
          expect(renderComponent('/foo').className).to.match(/\bactive\b/);
        });

        it('should not be active when on a different route', () => {
          expect(renderComponent('/bar').className).to.not.match(/\bactive\b/);
        });
      });

      describe('disabled state', () => {
        let router;

        beforeEach(() => {
          class LinkWrapper extends React.Component {
            render() {
              return (
                <LinkContainer to="/target" disabled>
                  <Component>Target</Component>
                </LinkContainer>
              );
            }
          }

          class Target extends React.Component {
            render() {
              return <div className="target" />;
            }
          }

          router = ReactTestUtils.renderIntoDocument(
            <Router history={createMemoryHistory('/')}>
              <Route path="/" component={LinkWrapper} />
              <Route path="/target" component={Target} />
            </Router>
          );
        });

        it('should not transition on click', () => {
          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(component),
            {button: 0}
          );

          const target = ReactTestUtils.scryRenderedDOMComponentsWithClass(
            router, 'target'
          );
          expect(target).to.be.empty;
        });

        it('should render with disabled class', () => {
          const component = ReactTestUtils.findRenderedComponentWithType(
            router, Component
          );
          expect(ReactDOM.findDOMNode(component).className)
            .to.match(/\bdisabled\b/);
        });
      });
    });
  });
});
