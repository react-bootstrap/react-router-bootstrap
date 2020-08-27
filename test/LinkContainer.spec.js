import React from 'react';
import Button from 'react-bootstrap/Button';
import NavItem from 'react-bootstrap/NavItem';
import DropdownItem from 'react-bootstrap/DropdownItem';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';

import { mount } from 'enzyme';
import LinkContainer from '../src/LinkContainer';

const elements = {
  Button,
  NavItem,
  DropdownItem,
  ListGroupItem,
};

describe('LinkContainer', () => {
  Object.keys(elements).forEach((name) => {
    describe(name, () => {
      const Component = elements[name];

      it('should make the correct href', () => {
        const router = mount(
          <Router>
            <Route
              path="/"
              element={(
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
          </Router>,
        );

        const anchor = router.findWhere((el) => el.type() === 'div' || el.type() === 'a');
        expect(anchor.getDOMNode().getAttribute('href')).toBe('/foo?bar=baz#the-hash');
      });

      it('should not add extra DOM nodes', () => {
        const router = mount(
          <Router>
            <Route
              path="/"
              element={(
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
          </Router>,
        );

        const container = router.find(
          LinkContainer,
        );
        const component = router.find(
          Component,
        );

        expect(container.getDOMNode())
          .toEqual(component.getDOMNode());
      });

      it('should join child element className with the one from container', () => {
        function renderComponent(location) {
          const router = mount(
            <Router initialEntries={[location]}>
              <Route
                path="/"
                element={(
                  <LinkContainer to="/" className="container-css">
                    <Component className="foo-css">Foo</Component>
                  </LinkContainer>
)}
              />
            </Router>,
          );

          const component = router.find(
            Component,
          );
          return component.getDOMNode();
        }

        const { className } = renderComponent('/test');

        expect(className.trim()).toMatch(/\bcontainer-css foo-css\b/);
      });

      describe('when clicked', () => {
        it('should transition to the correct route', () => {
          const router = mount(
            <Router>
              <div>
                <Route
                  path="/"
                  element={(
                    <LinkContainer to="/target">
                      <Component>Target</Component>
                    </LinkContainer>
)}
                />
                <Route
                  path="/target"
                  element={<div className="target" />}
                />
              </div>
            </Router>,
          );

          const anchor = router.find(
            Component,
          );
          anchor.simulate('click', { button: 0 });

          const target = router.find(
            '.target',
          );
          expect(target).toBeTruthy();
        });

        it('should call user defined click handlers', () => {
          const onClick = jest.fn();
          const childOnClick = jest.fn();

          const router = mount(
            <Router>
              <div>
                <Route
                  path="/"
                  element={(
                    <LinkContainer to="/target" onClick={onClick}>
                      <Component onClick={childOnClick}>Foo</Component>
                    </LinkContainer>
                  )}
                />
                <Route
                  path="/target"
                  element={<div className="target" />}
                />
              </div>
            </Router>,
          );

          const anchor = router.find(
            Component,
          );
          anchor.simulate('click', { button: 0 });

          expect(onClick).toHaveBeenCalledTimes(1);
          expect(childOnClick).toHaveBeenCalledTimes(1);
        });
      });

      describe('active state', () => {
        function renderComponent(location) {
          const router = mount(
            <Router initialEntries={[location]}>
              <Route
                path="/"
                element={(
                  <LinkContainer to="/foo">
                    <Component>Foo</Component>
                  </LinkContainer>
                )}
              />
            </Router>,
          );

          const component = router.find(
            Component,
          );
          return component.getDOMNode();
        }

        it('should be active when on the target route', () => {
          expect(renderComponent('/foo').className).toMatch(/\bactive\b/);
        });

        it('should not be active when on a different route', () => {
          expect(renderComponent('/bar').className).not.toMatch(/\bactive\b/);
        });

        it('should respect explicit active prop on container', () => {
          const router = mount(
            <Router>
              <Route
                path="/"
                element={(
                  <LinkContainer to="/bar" isActive>
                    <Component>Bar</Component>
                  </LinkContainer>
                )}
              />
            </Router>,
          );

          const component = router.find(
            Component,
          );
          expect(component.getDOMNode().className)
            .toMatch(/\bactive\b/);
        });
      });

      describe('disabled state', () => {
        /** @type {import('enzyme').ReactWrapper} */
        let router;

        beforeEach(() => {
          router = mount(
            <Router>
              <div>
                <Routes>
                  <Route
                    path="/"
                    element={(
                      <LinkContainer to="/target">
                        <Component disabled>Target</Component>
                      </LinkContainer>
                  )}
                  />
                  <Route
                    path="/target"
                    element={<div className="target" />}
                  />
                </Routes>
              </div>
            </Router>,
          );
        });

        (['ListGroupItem', 'NavItem'].includes(name) ? it.skip : it)(
          'should not transition on click',
          () => {
            const component = router.find(
              Component,
            );
            component.simulate('click', { button: 0 });
            const target = router.find(
              '.target',
            );
            expect(target.length).toBe(0);
          },
        );

        (name === 'NavItem' ? it.skip : it)('should render with disabled class', () => {
          const component = router.find(
            Component,
          );
          expect(component.getDOMNode().className)
            .toMatch(/\bdisabled\b/);
        });
      });
    });
  });
});
